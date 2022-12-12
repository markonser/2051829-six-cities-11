import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../types/types';

export interface State {
  comments: Comment[];
}

const initialState: State = {
  comments: [],
};

export const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state: State, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = comments.actions;
export default comments.reducer;
