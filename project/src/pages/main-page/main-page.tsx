
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../../components/card/card';
import CitiesNav from '../../components/cities-nav/cities-nav';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { getNavCitiesList } from '../../store/selectors/getNavCitiesList';
// import { getDefaultCityName } from '../../store/selectors/getDefaultCityName';
// import { getOffersList } from '../../store/selectors/getOffersList';
import { Offer } from '../../types/types';

type Props = {
  offers: Offer[];
}

export default function MainPage({ offers }: Props) {

  // const dispatch = useDispatch();


  const [activeOffer, setActiveOffer] = useState<number | undefined>();

  const handleMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleMouseLeave = () => {
    setActiveOffer(undefined);
  };

  // const offersList = useSelector(getOffersList);
  // const cityName = useSelector(getDefaultCityName);
  const navCitiesList = useSelector(getNavCitiesList);


  // const offerItem = cityName && offersList.filter((item) => item.city.name === cityName)

  return (
    <div className='page page--gray page--main' >
      <Header />
      <Helmet>
        <title>Список предлоджений</title>
      </Helmet>
      <main className='page__main page__main--index'>

        <CitiesNav navCitiesList={navCitiesList} />;

        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offers.length} places to stay in Amsterdam</b>
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
                  offers.map((offer) => (
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
                offers={offers}
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

