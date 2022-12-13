import { CityName } from '../const/const';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';
import { fetchNearbyOffers, fetchOffersAction, fetchFavoriteOffersAction, setOfferStatusAction, fetchOfferInfo } from './api-actions';

export interface State {
  selectedCity: CityName;
  offers: Offer[];
  isLoadingOffers: boolean;
  offersLoadError: boolean;
  nearbyOffers: Offer[];
  isLoadingNearbyOffers: boolean;
  nearbyLoadError: boolean;
  favoriteOffers: Offer[];
  currentOffer: null | Offer;
  favoriteOffersLoadError: boolean;
}

const initialState: State = {
  selectedCity: 'paris',
  offers: [],
  nearbyOffers: [],
  isLoadingOffers: false,
  isLoadingNearbyOffers: false,
  offersLoadError: false,
  nearbyLoadError: false,
  favoriteOffers: [],
  currentOffer: null,
  favoriteOffersLoadError: false,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity: (state: State, action: PayloadAction<CityName>) => {
      state.selectedCity = action.payload;
    },
    setOffers: (state: State, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setNearbyOffers: (state: State, action: PayloadAction<Offer[]>) => {
      state.nearbyOffers = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingOffers = true;
        state.offersLoadError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoadingOffers = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingOffers = false;
        state.offersLoadError = true;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isLoadingNearbyOffers = true;
        state.nearbyLoadError = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isLoadingOffers = false;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.isLoadingOffers = false;
        state.nearbyLoadError = true;
      })
      // favorite offers
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.favoriteOffersLoadError = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state, action) => {
        state.favoriteOffersLoadError = true;
      })
      // favorite status
      .addCase(setOfferStatusAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;

        const offerItem = state.offers.find((offer) => offer.id === action.payload.id);
        if (offerItem) {
          offerItem.isFavorite = action.payload.isFavorite;
        }

        const nearOfferItem = state.nearbyOffers.find((offer) => offer.id === action.payload.id);
        if (nearOfferItem) {
          nearOfferItem.isFavorite = action.payload.isFavorite;
        }

        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }
      })
      // current offer
      .addCase(fetchOfferInfo.pending, (state) => {
        state.favoriteOffersLoadError = false;
      })
      .addCase(fetchOfferInfo.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferInfo.rejected, (state) => {
        state.favoriteOffersLoadError = true;
      });
  },
});

export const { changeCity, setOffers, setNearbyOffers } = offersSlice.actions;
export default offersSlice.reducer;
