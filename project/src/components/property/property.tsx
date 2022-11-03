import { useParams } from 'react-router-dom';
import { Comments, Offer } from '../../types/types';
import CommentSendForm from '../comment-send-form/comment-send-form';
import Header from '../header/header';
import OfferComments from '../offer-comments/offer-comments';
import { getUnicKey } from '../utils/utils';

type Props = {
  offers: Offer[];
  comments: Comments[];
}

export default function Property({ offers, comments }: Props) {
  const commentsOfOffer: Comments[] = [];
  const params = useParams();
  const offer = offers.find((el) => el.id === Number(params.id));

  function getComments(arr: Comments[]) {
    arr.forEach((el) => {
      if (el.id === Number(params.id)) {
        commentsOfOffer.push(el);
      }
    });
  }
  getComments(comments);

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offer?.images?.map((img: string): JSX.Element => (
                <div className='property__image-wrapper' key={getUnicKey(offer.id)}>
                  <img className='property__image' src={img} alt='' />
                </div>)
              )}

            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>

              {offer?.isPremium &&
                <div className='property__mark'>
                  <span>Premium</span>
                </div>}

              <div className='property__name-wrapper'>

                {offer?.description &&
                  <h1 className='property__name'>
                    {offer?.title}
                  </h1>}

                <button className='property__bookmark-button property__bookmark-button--active button' type='button'>
                  <svg className='property__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>

              {offer?.rating &&
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ 'width': `${offer.rating * 20}%` }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>{offer?.rating}</span>
                </div>}
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer?.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  Bedrooms {offer?.bedrooms}
                </li>
                <li className='property__feature property__feature--adults'>
                  Max 4 adults {offer?.maxAdults}
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer?.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              {offer?.goods &&
                <div className='property__inside'>
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>
                    {offer.goods.map((el) => (
                      <li className='property__inside-item' key={getUnicKey(offer.id)}>
                        {el}
                      </li>))}
                  </ul>
                </div>}
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                {offer?.host &&
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
                    {offer?.description}
                  </p>
                </div >
              </div>
              <section className='property__reviews reviews'>
                <div>
                  <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{commentsOfOffer.length}</span></h2>
                  {commentsOfOffer.map((comment) => (
                    <OfferComments comment={comment} key={getUnicKey(comment.id)} />
                  ))}
                </div>
                <CommentSendForm />
                {/* форма для добавления комментариев тут */}
              </section>
            </div>
          </div>
        </section>
        <section className='property__map map'></section>
      </main>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>Other places in the neighbourhood</h2>
          <div className='near-places__list places__list'>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/room.jpg' width='260' height='200' alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;80</b>
                    <span className='place-card__price-text'>&#47;&nbsp;night</span>
                  </div>
                  <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
                    <svg className='place-card__bookmark-icon' width='18' height='19'>
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>In bookmarks</span>
                  </button>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ 'width': '80%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='/'>Wood and stone place</a>
                </h2>
                <p className='place-card__type'>Private room</p>
              </div>
            </article>

            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/apartment-02.jpg' width='260' height='200' alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;132</b>
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
                  <a href='/'>Canal View Prinsengracht</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>

            <article className='near-places__card place-card'>
              <div className='place-card__mark'>
                <span>Premium</span>
              </div>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='/'>
                  <img className='place-card__image' src='img/apartment-03.jpg' width='260' height='200' alt='' />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;180</b>
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
                    <span style={{ 'width': '100%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='/'>Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
