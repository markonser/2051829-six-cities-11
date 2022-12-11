import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property-page/property-page';
import ScrollToTop from '../../hooks/scroll-to-top/scroll-to-top';
import { AppRoute } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/selectors';

function App() {
  const offers = useSelector(getOffers);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={
            <MainPage />
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Room}
            element={
              <Property
                offers={offers}
                comments={[]}
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
