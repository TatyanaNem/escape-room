import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TMyQuest } from '../../types/quest';
import { changeStringEnding } from '../../utils/common';
import { useAppDispatch } from '../../hooks';
import { deleteBooking } from '../../store/api-actions';

type MyQuestCardProps = {
  myQuest: TMyQuest;
}

export default function MyQuestCard ({myQuest}: MyQuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {id: bookingId, location, date, time, peopleCount} = myQuest;
  const {id, previewImgWebp, previewImg, title, level} = myQuest.quest;

  function handleDeleteButtonClick () {
    dispatch(deleteBooking(bookingId));
  }

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp}, ${changeStringEnding(previewImgWebp, '@2x.webp 2x')}`}
          />
          <img
            src={previewImg}
            srcSet={changeStringEnding(previewImg, '@2x.webp 2x')}
            width="344"
            height="232"
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            className="quest-card__link"
            to={`${AppRoute.Quest}/${id}`}
          >
            {title}
          </Link>
          <span className="quest-card__info">{`[${date === 'today' ? 'сегодня' : 'завтра'}, ${time}. ${location.address}]`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{`${peopleCount} чел`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={handleDeleteButtonClick}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
