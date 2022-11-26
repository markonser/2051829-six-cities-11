import { Offer } from '../types/types';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Towels',
      'Heating',
      'Coffee',
      'machine',
      'Baby',
      'seat',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 1,
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
      name: 'paris'
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: [
      'Heating',
      'machine',
      'Towels',
      'Heating',
      'Coffee',
      'machine',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Lady'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 2,
    title: 'Заголовок объявления mocks 2',
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
      name: 'cologne'
    },
    description: 'mocks 3',
    goods: [
      'Heating',
      'seat',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 3,
    title: 'mocks 3',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370239,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'hamburg'
    },
    description: 'mocks 4',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 4,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 4',
    type: 'Apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'hamburg'
    },
    description: 'mocks 5',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 5,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909953943608,
      longitude: 4.939309666406098,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 5',
    type: 'Apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'dusseldorf'
    },
    description: 'mocks 6',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 6,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943558,
      longitude: 4.949309666406298,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 6',
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
      name: 'brussels'
    },
    description: 'mocks 7',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 7,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943408,
      longitude: 4.919309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 7',
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
      name: 'paris'
    },
    description: 'mocks 8',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 8,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3509553943508,
      longitude: 4.939309666406398,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 8',
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
      name: 'cologne'
    },
    description: 'mocks 9',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing',
      'machine',
      'Kitchen',
      'Dishwasher',
      'Cabel',
      'TV',
      'Fridge'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Max'
    },
    id: 9,
    images: [
      'img/studio-01.jpg.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3409553943208,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.5,
    title: 'mocks 9',
    type: 'Apartment'
  }
];
