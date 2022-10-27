import { useState } from 'react';
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
  function handleMouseLeave() {
    setActiveOffer(0);
  }

  return (
    <>
      {
        offers.map((offer) => (
          <Link
            to={`/offer/${offer.id}`}
            key={offer.id}
            state={{ offer: offer }}
          >;
            <Card
              key={offer.id}
              offer={offer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            // onClick={handleClick}
            />
          </Link>
        ))
      }
    </>
  );
}
