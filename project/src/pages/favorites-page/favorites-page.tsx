import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import Header from '../../components/header/header';

type Props = {
  offers: Offer[];
}

export default function Favorites({ offers }: Props) {
  const allFavoriteOffers = offers.filter((it) => it.isFavorite);
  const favoriteCities = Array.from(new Set(allFavoriteOffers.map((it) => it.city.name)));

  return (
    <div className='page'>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((it) => (
                <li className="favorites__locations-items" key={it}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        to={'/'}
                      >
                        <div className="locations__item-link">
                          <span>{it}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {allFavoriteOffers
                      .filter((el) => el.city.name === it)
                      .map((offer) => (
                        <article className="favorites__card place-card" key={it}>
                          {offer.isPremium &&
                            <div className='place-card__mark'>
                              <span>Premium</span>
                            </div>}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link
                              to={`/offer/${offer.id}`}
                              key={offer.id}
                            >
                              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="" />
                            </Link>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">&euro;{offer.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp;night</span>
                              </div>
                              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                  <use xlinkHref="#icon-bookmark"></use>
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                {offer.rating &&
                                  <span style={{ 'width': `${offer.rating * 20}%` }}></span>}
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link
                                to={`/offer/${offer.id}`}
                                key={offer.id}
                              >{offer.title}
                              </Link>
                            </h2>
                            <p className="place-card__type">{offer.type}</p>
                          </div>
                        </article>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </a>
      </footer>
    </div>
  );
}
