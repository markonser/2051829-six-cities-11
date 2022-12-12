import { CityName } from '../const/const';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offer, UserData } from '../types/types';
import { fetchOfferAction } from './api-actions';

export interface State {
  selectedCity: CityName;
  offers: Offer[];
  loading: boolean;
  hasError: boolean;
  userData: UserData | undefined;
}

const initialState: State = {
  selectedCity: 'paris',
  offers: [],
  loading: false,
  hasError: false,
  userData: undefined,
};

export const offers = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity: (state: State, action: PayloadAction<CityName>) => {
      state.selectedCity = action.payload;
    },
    setOffers: (state: State, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setUserData: (state: State, action: PayloadAction<UserData | undefined>) => {
      state.userData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.loading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loading = false;
        state.hasError = true;
      });
  },
});

export const { changeCity, setOffers, setUserData } = offers.actions;
export default offers.reducer;
