import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ContactsScreen() {
  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
          <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге
          </p>
          <h1 className="title title--size-m page-content__title">Контакты</h1>
        </div>
        <div className="contacts">
          <dl className="contacts__list">
            <div className="contacts__item">
              <dt className="contacts__dt">Адрес</dt>
              <dd className="contacts__dd">
                <address className="contacts__address">Санкт-Петербург,<br/> Набережная реки Карповка, д 5П</address>
              </dd>
            </div>
            <div className="contacts__item">
              <dt className="contacts__dt">Режим работы</dt>
              <dd className="contacts__dd">Ежедневно, с&nbsp;10:00 до&nbsp;22:00</dd>
            </div>
            <div className="contacts__item">
              <dt className="contacts__dt">Телефон</dt>
              <dd className="contacts__dd">
                <a className="link" href="tel:88003335599">8 (000) 111-11-11</a>
              </dd>
            </div>
            <div className="contacts__item">
              <dt className="contacts__dt">E&ndash;mail</dt>
              <dd className="contacts__dd">
                <a className="link" href="mailto:info@escape-room.ru">info@escape-room.ru</a>
              </dd>
            </div>
          </dl>
          <div className="contacts__map">
            <div className="map">
              <div className="map__container">
                <MapContainer
                  center={[59.968322, 30.31735]}
                  zoom={16}
                  scrollWheelZoom={false}
                  style={{width: '100%',height: '100%'}}
                >
                  <TileLayer
                    url="http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
                  />
                  <Marker position={[59.968322, 30.31735]}>
                    <Popup>
                    Санкт-Петербург,<br/> Набережная реки Карповка, д 5П
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
