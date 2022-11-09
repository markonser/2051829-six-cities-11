import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { offers } from './mocks/offers';

import { Comment, Offer } from './types/types';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockOffers: Offer[] = offers;
const mockCommets: Comment[] = comments;

root.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      comments={mockCommets}
    />
  </React.StrictMode>,
);

