import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, BookingDate, RequestStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectAuthStatus } from '../../../store/user-process/selectors';
import { useEffect, useState } from 'react';
import { fetchQuestBookingInfo } from '../../../store/api-actions';
import { selectActiveQuest, selectFetchingQuestsStatus, selectQuestBookingInfo } from '../../../store/data-process/selectors';
import Loading from '../../../components/loading/loading';
import TimeSlot from '../../../components/time-slot/time-slot';
import { TBookingInfo } from '../../../types/booking-info';
import Map from '../../../components/map/map';

export default function BookingScreen() {
  const {questId} = useParams();
  const authStatus = useAppSelector(selectAuthStatus);
  const fetchingStatus = useAppSelector(selectFetchingQuestsStatus);
  const questBookingInfo = useAppSelector(selectQuestBookingInfo);
  const activeQuest = useAppSelector(selectActiveQuest);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentQuestPlace, setCurrentQuestPlace] = useState<null | TBookingInfo>(null);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuestBookingInfo(questId));
    }
  }, [dispatch, questId]);

  if(authStatus === AuthorizationStatus.NoAuth) {
    navigate(AppRoute.Login);
  }

  if (fetchingStatus === RequestStatus.Loading) {
    return <Loading/>;
  }

  if (fetchingStatus === RequestStatus.Error) {
    navigate(AppRoute.NotFound);
  }

  if(fetchingStatus !== RequestStatus.Success || !questBookingInfo) {
    return null;
  }

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width="1366"
            height="1959"
            alt=""
          />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">{activeQuest?.title}</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">
                <Map
                  places={questBookingInfo}
                  currentPlace={currentQuestPlace}
                  setCurrentPlace={setCurrentQuestPlace}
                />
              </div>
            </div>
            <p className="booking-map__address">Вы&nbsp;выбрали: {currentQuestPlace?.location.address}</p>
          </div>
        </div>
        <form
          className="booking-form"
          action="https://echo.htmlacademy.ru/"
          method="post"
        >
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                {currentQuestPlace?.slots?.today.map((item) => (
                  <TimeSlot
                    day={BookingDate.Today}
                    key={item.time}
                    slot={item}
                  />
                ))}
              </div>
            </fieldset>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                {currentQuestPlace?.slots?.tomorrow.map((item) => (
                  <TimeSlot
                    day={BookingDate.Tomorrow}
                    key={item.time}
                    slot={item}
                  />
                ))}
              </div>
            </fieldset>
          </fieldset>
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Контактная информация</legend>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
              <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}"/>
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="person">Количество участников</label>
              <input type="number" id="person" name="person" placeholder="Количество участников" required/>
            </div>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
              <input type="checkbox" id="children" name="children" checked/>
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
            </label>
          </fieldset>
          <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}
