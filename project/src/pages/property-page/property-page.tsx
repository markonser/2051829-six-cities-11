import { useParams } from 'react-router-dom';
import { Comment, Offer } from '../../types/types';

import Header from '../../components/header/header';
import RewiewsList from '../../components/reviews-list/reviews-list';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useState } from 'react';
import Card from '../../components/card/card';

type Props = {
  offers: Offer[];
  comments: Comment[];
}

export default function Property({ offers, comments }: Props) {
  const params = useParams();
  const offer = offers.find((el) => el.id === Number(params.id));

  const [activeOffer, setActiveOffer] = useState<number | undefined>();

  const handleMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleMouseLeave = () => {
    setActiveOffer(undefined);
  };
  if (!offer) {
    return <div>Данные не загружены</div>;
  }

  return (
    <div className='page'>
      <Helmet>
        <title>Подробности предложения </title>
      </Helmet>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offer.images.map((img: string): JSX.Element => (
                <div className='property__image-wrapper' key={offer.id * Math.random()}>
                  <img className='property__image' src={img} alt='' />
                </div>)
              )}

            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>

              {offer.isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}

              <div className='property__name-wrapper'>

                {offer.description &&
                  <h1 className='property__name'>
                    {offer.title}
                  </h1>}

                <button className='property__bookmark-button property__bookmark-button--active button' type='button'>
                  <svg className='property__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>

              {offer.rating &&
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ 'width': `${offer.rating * 20}%` }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>{offer.rating}</span>
                </div>}
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  Bedrooms {offer.bedrooms}
                </li>
                <li className='property__feature property__feature--adults'>
                  Max 4 adults {offer.maxAdults}
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              {offer.goods &&
                <div className='property__inside'>
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>
                    {offer.goods.map((el) => (
                      <li className='property__inside-item' key={offer.id * Math.random()}>
                        {el}
                      </li>))}
                  </ul>
                </div>}
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                {offer.host &&
                  <div className='property__host-user user'>
                    <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                      <img className='property__avatar user__avatar' src={offer.host.avatarUrl} width='74' height='74' alt='Host avatar' />
                    </div>
                    <span className='property__user-name'>
                      {offer.host.name}
                    </span>
                    {offer.host.isPro &&
                      <span className='property__user-status'>
                        Pro
                      </span>}
                  </div>}
                <div className='property__description'>
                  <p className='property__text'>
                    {offer.description}
                  </p>
                </div >
              </div>

              <RewiewsList comments={comments} />


            </div>
          </div>
        </section>
        <Map
          offers={offers}
          selectedPoint={activeOffer}
          elementSelector={'property__map map'}
        />
      </main>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            {
              offers.map((item) => (
                <Card
                  key={item.id}
                  offer={item}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}
