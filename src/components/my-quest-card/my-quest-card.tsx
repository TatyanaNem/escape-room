import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TMyQuest, TQuestReview } from '../../types/quest';

type MyQuestCardProps = {
  myQuest: TMyQuest | TQuestReview;
}

export default function MyQuestCard ({myQuest}: MyQuestCardProps): JSX.Element {
  const {id} = myQuest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x"
          />
          <img
            src="img/content/palace/palace-size-s.jpg"
            srcSet="img/content/palace/palace-size-s@2x.jpg 2x"
            width="344"
            height="232"
            alt="Замок на возвышенности."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            className="quest-card__link"
            to={`${AppRoute.Quest}/${id}`}
          >
            Тайны старого особняка
          </Link>
          <span className="quest-card__info">[завтра,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br/>м. Петроградская]</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>3&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>Лёгкий
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
      </div>
    </div>
  );
}
