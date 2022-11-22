import { offers } from './../mocks/offers';
import { CitiesList } from './../const/const';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';

export interface CityType {
  defaultCity: CitiesList;
  navCitiesList: Record<CitiesList, string>;
  offers: Offer[];
}

const initialState: CityType = {
  defaultCity: CitiesList.Paris,
  navCitiesList: CitiesList,
  offers: offers
};

export const citySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCity: (state: CityType, action: PayloadAction<CitiesList>) => {
      state.defaultCity = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;

