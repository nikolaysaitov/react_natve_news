import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NewsArticle} from '../../../entities/news/types';
import {NewsCard} from './NewsCard';
import {Loader} from '../../../shared/ui/components/Loader';
import {Error} from '../../../shared/ui/components/Error';
import {SearchFilter} from '../../../widgets/search-filter';
import {fetchNews, clearNews, setSearchQuery, setCategory} from '../model/newsListSlice';
import {RootState} from '../../../app/store';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme?.colors?.background};
`;

const List = styled(FlatList as new () => FlatList<NewsArticle>)`
  flex: 1;
`;

export const NewsListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {articles, loading, error, hasMore, searchQuery, category} = useSelector((state: RootState) => state.newsList);

  const loadNews = useCallback(
    (page: number = 1) => {
      dispatch(fetchNews({page, query: searchQuery, category}) as any);
    },
    [dispatch, searchQuery, category],
  );

  useEffect(() => {
    dispatch(clearNews());
    loadNews(1);
  }, [searchQuery, category]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadNews();
    }
  };

  const handleSearch = (query: string, category: string) => {
    dispatch(clearNews());
    dispatch(setSearchQuery(query));
    dispatch(setCategory(category));
  };

  const handleArticlePress = (article: NewsArticle) => {
    navigation.navigate('NewsDetail', {article});
  };

  const renderItem = ({item}: {item: NewsArticle}) => <NewsCard article={item} onPress={handleArticlePress} />;

  const renderFooter = () => {
    if (!loading) return null;
    return <Loader />;
  };

  if (error && articles.length === 0) {
    return (
      <Container>
        <SearchFilter onSearch={handleSearch} initialCategory={category} />
        <Error message={error} onRetry={() => loadNews(1)} />
      </Container>
    );
  }

  return (
    <Container>
      <SearchFilter onSearch={handleSearch} initialCategory={category} />
      <List
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.url}-${index}`}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};
