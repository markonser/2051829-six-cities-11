import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../types/types';

export interface State {
  comments: Comment[];
}

const initialState: State = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state: State, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
