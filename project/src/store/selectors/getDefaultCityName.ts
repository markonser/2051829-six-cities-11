import { RootState } from '../index';

export const getDefaultCityName = (state: RootState) => state.city.defaultCity;
