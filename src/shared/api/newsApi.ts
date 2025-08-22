import axios from 'axios';
import {NewsResponse, NewsApiParams} from '../../entities/news/types';
import Config from 'react-native-config';

const BASE_URL = 'https://newsapi.org/v2';

export const newsApi = {
  getTopHeadlines: async (params: NewsApiParams): Promise<NewsResponse> => {
    try {
      console.log('Config.NEWS_API_KEY', Config);
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          ...params,
          apiKey: Config.NEWS_API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  },
};
