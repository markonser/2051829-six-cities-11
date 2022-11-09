import { Comment } from '../types/types';

export const comments : Comment[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    date: 'may 2019',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'angelina',
    },
  },
  {
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    date: 'dec 2022',
    id: 3,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'max',
    },
  },
  {
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    date: 'may 2019',
    id: 4,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'angelina',
    },
  },
];
