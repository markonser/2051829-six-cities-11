import { cityNames } from './../../const/const';
import { RootState } from '../index';

export const getCityOffers = (state: RootState) => {
  const cityName = cityNames[state.offers.selectedCity].name;

  return state.offers.offers.filter((offer)=> offer.city.name === cityName);
};
