import { checkAuthAction, checkAuthAction as loginAction } from './api-actions';
import { AuthorizationStatus } from './../const/const';
import { UserData } from './../types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface State {
  userData: UserData | undefined;
  authorizationStatus: AuthorizationStatus;

}

const initialState: State = {
  userData: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: State, action: PayloadAction<UserData | undefined>) => {
      state.userData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  // .addCase(checkAuthAction.pending, (state) => {
  //   state.authorizationStatus = AuthorizationStatus.Unknown;
  // })
  // .addCase(checkAuthAction.fulfilled, (state, action) => {
  //   state.userData = action.payload;
  //   state.authorizationStatus = AuthorizationStatus.Auth;
  // })
  // .addCase(checkAuthAction.rejected, (state) => {
  //   state.authorizationStatus = AuthorizationStatus.NoAuth;
  // });
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
