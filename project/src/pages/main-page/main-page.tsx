
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../../components/card/card';
import CitiesNav from '../../components/cities-nav/cities-nav';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { setOffers } from '../../store/reducer';
import { getCityOffers } from '../../store/selectors/getCityOffers';
import { getSelectedCity } from '../../store/selectors/getSelectedCity';
import { Offer } from '../../types/types';


type Props = {
  offers: Offer[];
}

export default function MainPage({ offers }: Props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setOffers(offers));
  },[]);

  const [activeOffer, setActiveOffer] = useState<number | undefined>();

  const handleMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleMouseLeave = () => {
    setActiveOffer(undefined);
  };

  const offersList = useSelector(getCityOffers);
  const selectedCity = useSelector(getSelectedCity);

  return (
    <div className='page page--gray page--main' >
      <Header />
      <Helmet>
        <title>Список предлоджений</title>
      </Helmet>
      <main className='page__main page__main--index'>

        <CitiesNav />;

        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersList.length} places to stay in {`${selectedCity.charAt(0).toUpperCase()}${selectedCity.slice(1)}`}</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                  <li className='places__option' tabIndex={0}>Price: low to high</li>
                  <li className='places__option' tabIndex={0}>Price: high to low</li>
                  <li className='places__option' tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className='cities__places-list places__list tabs__content'>
                {
                  offersList.map((offer) => (
                    <Card
                      key={offer.id}
                      offer={offer}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))
                }
              </div>
            </section>
            <div className='cities__right-section'>
              <Map
                offers={offersList}
                selectedPoint={activeOffer}
                elementSelector={'cities__map map'}
              />

            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

