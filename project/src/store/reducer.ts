import { changeCity, getAllOffers } from './action';
import { CitiesList } from './../const/const';
import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';

const initialState = {
  city: CitiesList.Paris as string,
  offers: offers
};

export const reducer = createReducer(initialState, (builfer) => {
  builfer
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.value;
    })
    .addCase(getAllOffers, (state) => {
      state.offers = offers;
    });
});

