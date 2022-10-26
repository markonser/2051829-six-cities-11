import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { FullOfferType, SettingsType } from './types/types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockOffers: FullOfferType[] = offers;

const Settings : SettingsType = {
  placesCount: 654
} as const;

root.render(
  <React.StrictMode>
    <App
      placesCount={Settings}
      offers={mockOffers}
    />
  </React.StrictMode>,
);
