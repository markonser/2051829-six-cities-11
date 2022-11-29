
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../../components/card/card';
import CitiesNav from '../../components/cities-nav/cities-nav';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import { SortType } from '../../const/const';
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
  }, [dispatch, offers]);

  const [activeOffer, setActiveOffer] = useState<number | undefined>();

  const handleMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleMouseLeave = () => {
    setActiveOffer(undefined);
  };

  const offersList = useSelector(getCityOffers);
  const selectedCity = useSelector(getSelectedCity);

  const sortOffers = (sortBy: keyof typeof SortType): void => {
    let sortedOffersBySortType;
    switch (sortBy) {
      case SortType.Popular:
        sortedOffersBySortType = offers.filter((it) => it.city.name === selectedCity);
        break;
      case SortType.PriceLowToHigh:
        sortedOffersBySortType = [...offers].sort((a, b) => a.price - b.price);
        break;
      case SortType.PriceHighToLow:
        sortedOffersBySortType = [...offers].sort((a, b) => b.price - a.price);
        break;
      case SortType.RatingHighToLow:
        sortedOffersBySortType = [...offers].sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedOffersBySortType = offers.filter((it) => it.city.name === selectedCity);
    }
    dispatch(setOffers(sortedOffersBySortType));
  };

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

              <Sorting sortOffers={sortOffers} />

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

