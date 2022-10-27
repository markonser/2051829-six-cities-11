import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { Offer, SettingsType } from '../../types/types';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import Property from '../property/property';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type Props = {
  placesCount: SettingsType;
  offers: Offer[];
}

function App({ placesCount, offers }: Props){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <MainPage
            placesCount={placesCount}
            offers={offers}
          />
        }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Property offers={offers}/>} />
        <Route path='/favorites' element={
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
  );
}

export default App;
