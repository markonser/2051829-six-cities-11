import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer} from '../types/types';
import { AppDispatch, RootState } from '../store/index';
import { APIRoute} from '../const/const';

export const fetchNeighbourhood = createAsyncThunk<Offer[], string , {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);
