import { FullOfferType } from '../../types/types';
import Card from '../card/card';

export function OffrsList({ offers }: { offers: FullOfferType[] }): JSX.Element {

  return (
    <>
      {
        offers.map((offer) => (<Card offer={offer} key={offer.id} />))
      }
    </>
  );
}
