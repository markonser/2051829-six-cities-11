import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Comment, Offer, UserData } from '../types/types';
import { AppDispatch, RootState } from './index';
import { APIRoute, OfferId } from '../const/const';
import { setOffers } from './offers';
import { dropUser, saveUser } from '../services/user';
import { setComments } from './comments';

export const fetchOfferAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffers(data));
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string , {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(setComments(data));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth', async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveUser(data);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropUser();
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const setFavoriteOfferAction = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/setFavoriteOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/1`);
    return data;
  }
);

export const deleteFavoriteOfferAction = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/deleteFavoriteOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/0`);
    return data;
  }
);
