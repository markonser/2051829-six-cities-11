import { cityNames } from '../const/const';
import { RootState } from './index';

export const getOffers = (state: RootState) => state.offers.offers;
export const getComments = (state: RootState) => state.comments.comments;
export const getOffersLoading = (state: RootState) => state.offers.loading;

export const getCityOffers = (state: RootState) => {
  const cityName = cityNames[state.offers.selectedCity].name;
  return state.offers.offers.filter((offer) => offer.city.name.toLowerCase() === cityName);
};


export const getSelectedCity = (state: RootState) => state.offers.selectedCity;
