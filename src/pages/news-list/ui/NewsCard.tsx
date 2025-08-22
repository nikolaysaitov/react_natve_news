import React from 'react';
import styled from 'styled-components/native';
import {NewsArticle} from '../../../entities/news/types';
import {theme} from '../../../shared/ui/theme';

const Card = styled.TouchableOpacity`
  background-color: ${theme.colors.card};
  border-radius: ${theme.borderRadius.m}px;
  margin: ${theme.spacing.s}px ${theme.spacing.m}px;
  padding: ${theme.spacing.m}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 2;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: ${theme.borderRadius.s}px;
  margin-bottom: ${theme.spacing.m}px;
`;

const Placeholder = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${theme.colors.border};
  border-radius: ${theme.borderRadius.s}px;
  margin-bottom: ${theme.spacing.m}px;
  justify-content: center;
  align-items: center;
`;

const PlaceholderText = styled.Text`
  color: ${theme.colors.textSecondary};
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: ${theme.spacing.s}px;
  color: ${theme.colors.text};
`;

const Source = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs}px;
`;

const Date = styled.Text`
  font-size: 12px;
  color: ${theme.colors.textSecondary};
`;

interface NewsCardProps {
  article: NewsArticle;
  onPress: (article: NewsArticle) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({article, onPress}) => {
  return (
    <Card onPress={() => onPress(article)}>
      {article.urlToImage ? (
        <Image source={{uri: article.urlToImage}} />
      ) : (
        <Placeholder>
          <PlaceholderText>Нет изображения</PlaceholderText>
        </Placeholder>
      )}
      <Title numberOfLines={2}>{article.title}</Title>
      <Source>{article.source.name}</Source>
      <Date>{article.publishedAt}</Date>
    </Card>
  );
};
