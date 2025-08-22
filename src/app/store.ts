import {configureStore} from '@reduxjs/toolkit';
import newsListReducer from '../pages/news-list/model/newsListSlice';
import newsDetailReducer from '../pages/news-detail/model/newsDetailSlice';

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    newsDetail: newsDetailReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: ['persist/PERSIST'],
  //       },
  //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
