import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FullOfferType } from '../../types/types';

export default function Card({ offer }: { offer: FullOfferType }): JSX.Element {
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  // const {id} = useParams();
  // const tool = offer.find((el) => el.id === params.id);
  // console.log(id);

  function onHoverHandler() {
    setIsMouseHovered(true);

  }

  function onHoverOutHandler() {
    setIsMouseHovered(false);

  }

  function onClickRedirectHandler() {
    // <Link to={`/offer/${offer.id}`} />;
    // console.log(offer.id);
  }

  return (
    <article className='cities__card place-card'
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverOutHandler}
      onClick={onClickRedirectHandler}
    >
      {offer.isPremium
        ?
        <div className='place-card__mark'>
          <span>Premium {isMouseHovered}</span>
        </div>
        : ''}

      <div className='cities__image-wrapper place-card__image-wrapper'>
        {/* <a href='/'> */}
        <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='' />
        {/* </a> */}
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ 'width': '80%' }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='/'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}
