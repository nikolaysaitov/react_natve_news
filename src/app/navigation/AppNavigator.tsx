import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NewsListScreen} from '../../pages/news-list';
import {NewsDetailScreen} from '../../pages/news-detail';
import {NewsArticle} from '../../entities/news/types';

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetail: {article: NewsArticle};
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}>
        <Stack.Screen name="NewsList" component={NewsListScreen} options={{title: 'Новости'}} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{title: 'Детали новости'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
