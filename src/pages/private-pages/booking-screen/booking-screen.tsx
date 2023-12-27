import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RequestStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectAuthStatus } from '../../../store/user-process/selectors';
import { useEffect, useState } from 'react';
import { fetchQuestBookingInfo } from '../../../store/api-actions';
import { selectActiveQuest, selectFetchingQuestsStatus, selectQuestBookingInfo } from '../../../store/data-process/selectors';
import { TBookingInfo } from '../../../types/booking-info';
import Map from '../../../components/map/map';
import BookingForm from '../../../components/booking-form/booking-form';
import { Spinner } from '../../../components/spinner/spinner';

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
    return <Spinner/>;
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
        {
          currentQuestPlace && questId &&
          <BookingForm
            currentPlace={currentQuestPlace}
            questId={questId}
          />
        }
      </div>
    </main>
  );
}
