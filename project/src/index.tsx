import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { offers } from './mocks/offers';
import { store } from './store';


import { Comment, Offer } from './types/types';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockOffers: Offer[] = offers;
const mockCommets: Comment[] = comments;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={mockOffers}
        comments={mockCommets}
      />
    </Provider>
  </React.StrictMode>,
);

