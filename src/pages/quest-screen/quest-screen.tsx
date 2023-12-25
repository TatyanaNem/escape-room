import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveQuest } from '../../store/api-actions';
import { selectActiveQuest, selectActiveQuestFetchingStatus } from '../../store/data-process/selectors';
import { AppRoute, RequestStatus } from '../../const';
import Loading from '../../components/loading/loading';
import { changeStringEnding } from '../../utils/common';

export default function QuestScreen() {
  const {questId} = useParams();
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectActiveQuestFetchingStatus);
  const activeQuest = useAppSelector(selectActiveQuest);

  useEffect(() => {
    if (questId) {
      dispatch(fetchActiveQuest(questId));
    }
  }, [dispatch, questId]);

  if (fetchingStatus === RequestStatus.Loading) {
    return <Loading/>;
  }

  if (fetchingStatus === RequestStatus.Error) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if(fetchingStatus !== RequestStatus.Success || !activeQuest) {
    return null;
  }

  const {id, previewImg, previewImgWebp, title, type, level, peopleMinMax, description} = activeQuest;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${changeStringEnding(previewImgWebp, '@2x.webp 2x')}`}/>
          <img src={previewImg} srcSet={changeStringEnding(previewImg, '@2x.jpg 2x')} width="1366" height="768" alt={title}/>
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>
            {type}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {`${peopleMinMax[0]}-${peopleMinMax[1]} чел`}
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {level}
            </li>
          </ul>
          <p className="quest-page__description">
            {description}
          </p>
          <Link
            className="btn btn--accent btn--cta quest-page__btn"
            to={`${AppRoute.Quest}/${id}${AppRoute.Booking}`}
          >
            Забронировать
          </Link>
        </div>
      </div>
    </main>
  );
}
