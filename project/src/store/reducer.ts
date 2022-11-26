import { CityName } from '../const/const';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';

export interface State {
  selectedCity: CityName;
  offers: Offer[];
}

const initialState: State = {
  selectedCity: 'paris',
  offers: [],
};

export const reducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCity: (state: State, action: PayloadAction<CityName>) => {
      state.selectedCity = action.payload;
    },
    setOffers: (state: State, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
  },
});

export const { changeCity, setOffers } = reducer.actions;
export default reducer.reducer;

