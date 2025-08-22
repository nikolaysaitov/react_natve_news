import React from 'react';
import styled from 'styled-components/native';
import {Linking} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {NewsArticle} from '../../../entities/news/types';
import {theme} from '../../../shared/ui/theme';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Image = styled.Image`
  width: 100%;
  height: 250px;
`;

const Placeholder = styled.View`
  width: 100%;
  height: 250px;
  background-color: ${theme.colors.border};
  justify-content: center;
  align-items: center;
`;

const PlaceholderText = styled.Text`
  color: ${theme.colors.textSecondary};
`;

const Content = styled.View`
  padding: ${theme.spacing.m}px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: ${theme.spacing.m}px;
  color: ${theme.colors.text};
`;

const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: ${theme.spacing.m}px;
  color: ${theme.colors.text};
`;

const Meta = styled.View`
  margin-bottom: ${theme.spacing.m}px;
`;

const Author = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xs}px;
`;

const Date = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xs}px;
`;

const Source = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${theme.spacing.m}px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.m}px ${theme.spacing.l}px;
  border-radius: ${theme.borderRadius.m}px;
  flex: 1;
  margin-horizontal: ${theme.spacing.s}px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface RouteParams {
  article: NewsArticle;
}

export const NewsDetailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {article} = route.params as RouteParams;

  const handleOpenInBrowser = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <Container>
      {article.urlToImage ? (
        <Image source={{uri: article.urlToImage}} />
      ) : (
        <Placeholder>
          <PlaceholderText>Нет изображения</PlaceholderText>
        </Placeholder>
      )}

      <Content>
        <Title>{article.title}</Title>

        <Meta>
          {article.author && <Author>Автор: {article.author}</Author>}
          <Date>Опубликовано: {article.publishedAt}</Date>
          <Source>Источник: {article.source.name}</Source>
        </Meta>

        <Description>{article.description || article.content}</Description>

        <ButtonContainer>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Назад</ButtonText>
          </Button>

          {article.url && (
            <Button onPress={handleOpenInBrowser}>
              <ButtonText>Открыть в браузере</ButtonText>
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  );
};
