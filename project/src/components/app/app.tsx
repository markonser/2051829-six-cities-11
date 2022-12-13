import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import Property from '../../pages/property-page/property-page';
import ScrollToTop from '../../hooks/scroll-to-top/scroll-to-top';
import { AppRoute } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { getAuthorizationStatus, getOffers } from '../../store/selectors';
import LoginPrivateRoute from '../login-private-route/login-private-route';
import FavoritePrivateRoute from '../favorite-private-route/favorite-private-route';
import { useAppSelector } from '../../hooks/useAppDispatch';
import { HistoryRouter } from '../history-router/history-router';
import browserHistory from '../../browser-history';

function App() {
  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={
            <MainPage />
          }
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPrivateRoute authorizationStatus={authorizationStatus}>
                <Login />
              </LoginPrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={
              <Property
                offers={offers}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <FavoritePrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites offers={[]}/>
              </FavoritePrivateRoute>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
