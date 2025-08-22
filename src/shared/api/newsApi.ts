import axios from 'axios';
import {NewsResponse, NewsApiParams} from '../../entities/news/types';

const API_KEY = '49395fb2b3e749a19a3411d320719f10'; // Замените на ваш ключ
const BASE_URL = 'https://newsapi.org/v2';

export const newsApi = {
  getTopHeadlines: async (params: NewsApiParams): Promise<NewsResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          ...params,
          apiKey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  },
};
