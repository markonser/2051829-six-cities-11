import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/types';
import Card from '../card/card';

type Props = {
  offers: Offer[];
}

export function OffersList({ offers }: Props) {
  const [, setActiveOffer] = useState<number>();

  const handleMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };
  const handleMouseLeave = () => {
    setActiveOffer(0);
  };

  return (
    <>
      <Helmet>
        <title>Список предлоджений</title>
      </Helmet>
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
    </>
  );
}
