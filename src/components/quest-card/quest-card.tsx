import { Link } from 'react-router-dom';
import { TQuestReview } from '../../types/quest';
import { changeStringEnding } from '../../utils/common';
import { AppRoute } from '../../const';

type TQuestCardProps = {
  quest: TQuestReview;
}

export default function QuestCard ({quest}: TQuestCardProps): JSX.Element {
  const {id, previewImgWebp, previewImg, title, peopleMinMax, level} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${changeStringEnding(previewImgWebp, '@2x.webp 2x')}`}/>
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
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
}
