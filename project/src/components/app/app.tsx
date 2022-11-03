import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { Offer, SettingsType } from '../../types/types';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import Property from '../property/property';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { AppRoute } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { comments } from '../../mocks/comments';

type Props = {
  placesCount: SettingsType;
  offers: Offer[];
}

function App({ placesCount, offers }: Props) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={
            <MainPage
              placesCount={placesCount}
              offers={offers}
            />
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Room}
            element={
              <Property
                offers={offers}
                comments={comments}
              />
            }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites
                offers={offers}
              />
            </PrivateRoute>
          }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
