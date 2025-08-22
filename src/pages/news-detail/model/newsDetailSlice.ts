import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewsArticle} from '../../../entities/news/types';

interface NewsDetailState {
  currentArticle: NewsArticle | null;
}

const initialState: NewsDetailState = {
  currentArticle: null,
};

const newsDetailSlice = createSlice({
  name: 'newsDetail',
  initialState,
  reducers: {
    setCurrentArticle: (state, action: PayloadAction<NewsArticle>) => {
      state.currentArticle = action.payload;
    },
    clearCurrentArticle: state => {
      state.currentArticle = null;
    },
  },
});

export const {setCurrentArticle, clearCurrentArticle} = newsDetailSlice.actions;
export default newsDetailSlice.reducer;
