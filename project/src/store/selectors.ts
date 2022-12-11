import { cityNames } from '../const/const';
import { RootState } from './index';

export const getOffers = (state: RootState) => state.offers.offers;
export const getOffersLoading = (state: RootState) => state.offers.loading;

export const getCityOffers = (state: RootState) => {
  const cityName = cityNames[state.offers.selectedCity].name;
  const filtered = state.offers.offers.filter((offer) => {
    const indicator = offer.city.name.toLowerCase() === cityName;
    return indicator;
  });

  return filtered;
};


export const getSelectedCity = (state: RootState) => state.offers.selectedCity;
