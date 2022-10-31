import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import Card from '../card/card';

type Props = {
  offers: Offer[];
}

export function OffersList({ offers }: Props) {
  const [, setActiveOffer] = useState<number>();

  function handleMouseEnter(offerId: number) {
    setActiveOffer(offerId);
  }
  // function handleMouseLeave() {
  //   setActiveOffer(0);
  // }

  return (
    <>
      <Helmet>
        <title>Список предлоджений</title>
      </Helmet>
      {
        offers.map((offer) => (
          <Link
            to={`/offer/${offer.id}`}
            key={offer.id}
          >;
            <Card
              key={offer.id}
              offer={offer}
              onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            />
          </Link>
        ))
      }
    </>
  );
}
