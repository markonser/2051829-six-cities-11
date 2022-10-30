import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/types';
import { isFaforite } from '../utils/utils';

type Props = {
  offer: Offer;
  onMouseEnter: (offerId: number) => void;
  onMouseLeave: () => void;
}

export default function Card({ offer, onMouseEnter, onMouseLeave }: Props) {

  function handleMouseEnter() {
    onMouseEnter(offer.id);
  }

  function handleMpuseLeave() {
    onMouseLeave();
  }

  return (
    <>
      <Helmet>
        <title>Подробности предложения </title>
      </Helmet>
      <article className='cities__card place-card'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMpuseLeave}
      >
        {offer.isPremium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>}

        <div className='cities__image-wrapper place-card__image-wrapper'>
          <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='' />
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            {isFaforite(offer.isFavorite)}
          </div>
          {offer.rating &&
            <div className='place-card__rating rating'>
              <div className='place-card__stars rating__stars'>
                <span style={{ 'width': `${offer.rating * 20}%` }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
            </div>}
          <h2 className='place-card__name'>
            <div>{offer.title}</div>
          </h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </article >
    </>
  );
}
