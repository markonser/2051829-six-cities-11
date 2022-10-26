import { FullOfferType } from '../types/types';

export const offers: FullOfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'mocks 1',
    type: 'Apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'mocks 2',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 2,
    images: [
      'img/apartment-02.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496063,
      longitude: 4.673877537499063,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 2,
    title: 'mocks 2',
    type: 'Room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'mocks 3',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 3,
    images: [
      'img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496045,
      longitude: 4.673877537499045,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 2,
    title: 'mocks 3',
    type: 'Apartment'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'mocks 4',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: true,
      name: 'Angelina'
    },
    id: 4,
    images: [
      'img/apartment-02.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496012,
      longitude: 4.673877537499012,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 3,
    title: 'mocks 4',
    type: 'Apartment'
  }
];
