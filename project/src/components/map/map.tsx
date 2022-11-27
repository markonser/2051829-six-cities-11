import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { cityNames, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const/const';
import { Offer } from '../../types/types';
import useMap from '../../hooks/use-map/use-map';
import { getSelectedCity } from '../../store/selectors/getSelectedCity';
import { useSelector } from 'react-redux';

type MapProps = {
  offers: Offer[];
  selectedPoint: number | undefined;
  elementSelector: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map({ offers, selectedPoint, elementSelector }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const markersRef = useRef<Marker[]>([]);
  const map = useMap(mapRef, offers);

  const selectedCity = useSelector(getSelectedCity);

  useEffect(() => {
    if (map) {
      map.setView(
        [cityNames[selectedCity].latitude, cityNames[selectedCity].longitude],
        cityNames[selectedCity].zoom
      );

      markersRef.current.forEach((markerItem) => markerItem.remove());

      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
        markersRef.current.push(marker);
      });
    }
  }, [map, offers, selectedPoint, selectedCity]);

  return <section className={elementSelector} ref={mapRef}></section>;
}

export default Map;
