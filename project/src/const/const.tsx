export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '*'
}

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const cityNames = {
  paris: {
    name: 'paris',
    latitude:2.351557,
    longitude:48.861694,
  },
  cologne: {
    name: 'cologne',
    latitude:6.938399,
    longitude:50.930779,
  },
  brussels: {
    name: 'brussels',
    latitude:4.352131,
    longitude:50.854283,
  },
  amsterdam: {
    name: 'amsterdam',
    latitude: 52.370216,
    longitude: 4.895168,
  },
  hamburg: {
    name: 'hamburg',
    latitude:53.550688,
    longitude:9.992895,
  },
  dusseldorf: {
    name: 'dusseldorf',
    latitude:51.238475,
    longitude:6.790159,
  },
};

export type CityName = keyof typeof cityNames;

export enum SortType {
  Default = 'Default',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  RatingHighToLow = 'RatingHighToLow'
}
