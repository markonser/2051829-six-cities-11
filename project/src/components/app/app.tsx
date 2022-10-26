import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PrivateRoute from '../private-route/private-route';
import Property from '../property/property';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App({ ...prop }): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage {...prop} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Property />} />
        <Route path='/favorites' element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
