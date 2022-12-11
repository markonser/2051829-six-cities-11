export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '*'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export type cityNamesType = Record<string, {
  name: string;
  latitude: number;
  longitude: number;
  zoom: number;
}>

export const cityNames: cityNamesType = {
  paris: {
    name: 'paris',
    latitude: 48.861694,
    longitude: 2.351557,
    zoom: 12
  },
  cologne: {
    name: 'cologne',
    latitude: 50.930779,
    longitude: 6.938399,
    zoom: 12
  },
  brussels: {
    name: 'brussels',
    latitude: 50.854283,
    longitude: 4.352131,
    zoom: 12
  },
  amsterdam: {
    name: 'amsterdam',
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 12
  },
  hamburg: {
    name: 'hamburg',
    latitude: 53.550688,
    longitude: 9.992895,
    zoom: 12
  },
  dusseldorf: {
    name: 'dusseldorf',
    latitude: 51.238475,
    longitude: 6.790159,
    zoom: 12
  },
};

export type CityName = keyof typeof cityNames;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  RatingHighToLow = 'RatingHighToLow'
}

export const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passRegExp = /^(?=.*\d)(?=.*[A-Za-zА-Яа-яЁё])([^\s]){2,}$/;
