import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Offer } from '../../types/types';
import { useSelector } from 'react-redux';
import { getSelectedCity } from '../../store/selectors/getSelectedCity';
import { cityNames } from '../../const/const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: Offer[]
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const selectedCity = useSelector(getSelectedCity);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityNames[selectedCity].latitude,
          lng: cityNames[selectedCity].longitude
        },
        zoom: 12
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, offer]);
  return map;

}

export default useMap;
