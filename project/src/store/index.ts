import { createAPI } from './../services/api';
import { configureStore } from '@reduxjs/toolkit';
import offers from './offers';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
