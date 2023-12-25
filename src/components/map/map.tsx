import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { TBookingInfo } from '../../types/booking-info';
import { useEffect } from 'react';
import { Icon } from 'leaflet';
import { CityForMap, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  places: TBookingInfo[];
  currentPlace?: TBookingInfo | null;
  setCurrentPlace?: (place: TBookingInfo) => void;
}

export default function Map ({places, currentPlace, setCurrentPlace}: MapProps) {
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [23, 42],
    iconAnchor: [12, 21]
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [23, 42],
    iconAnchor: [12, 21]
  });

  useEffect(() => {
    if (places && setCurrentPlace) {
      setCurrentPlace(places[0]);
    }
  }, [places, setCurrentPlace]);

  return (
    <MapContainer
      center={[CityForMap.location.coords[0], CityForMap.location.coords[1]]}
      zoom={10}
      scrollWheelZoom={false}
      style={{width: '100%',height: '100%'}}
    >
      <TileLayer
        url="http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
      />
      {
        places.map((item) => (
          <Marker
            key={item.id}
            position={[item.location.coords[0], item.location.coords[1]]}
            icon={item.id === currentPlace?.id ? currentCustomIcon : defaultCustomIcon}
            eventHandlers={{
              mouseover: () => {
                if (setCurrentPlace) {
                  setCurrentPlace(item);
                }
              },
            }}
          >
            <Popup>Санкт-Петербург,<br/>
              {item.location.address}
            </Popup>
          </Marker>))
      }
    </MapContainer>
  );
}
