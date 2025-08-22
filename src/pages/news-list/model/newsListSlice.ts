import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {NewsArticle, NewsApiParams} from '../../../entities/news/types';
import {newsApi} from '../../../shared/api/newsApi';
import {PAGE_SIZE} from '../../../shared/lib/constants';

interface NewsListState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  searchQuery: string;
  category: string;
}

const initialState: NewsListState = {
  articles: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  searchQuery: '',
  category: '',
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (params: {page: number; query?: string; category?: string}) => {
  const apiParams: NewsApiParams = {
    page: params.page,
    pageSize: PAGE_SIZE,
    country: 'us',
  };

  if (params.query) {
    apiParams.q = params.query;
  }
  if (params.category) {
    apiParams.category = params.category;
  }

  return await newsApi.getTopHeadlines(apiParams);
});

const newsListSlice = createSlice({
  name: 'newsList',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    clearNews: state => {
      state.articles = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = [...state.articles, ...action.payload.articles];
        state.hasMore = state.articles.length < action.payload.totalResults;
        state.page += 1;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export const {setSearchQuery, setCategory, clearNews} = newsListSlice.actions;
export default newsListSlice.reducer;
