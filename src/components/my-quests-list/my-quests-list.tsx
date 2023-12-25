import { TMyQuest, TQuestReview } from '../../types/quest';
import MyQuestCard from '../my-quest-card/my-quest-card';

type TMyQuestsListProps = {
  myQuests: TQuestReview[] | TMyQuest[];
}

export default function MyQuestsList ({myQuests}: TMyQuestsListProps) {
  return (
    <>
      <div className="page-content__title-wrapper">
        <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
      </div>
      <div className="cards-grid">
        {myQuests.map((quest) => (
          <MyQuestCard
            key={quest.id}
            myQuest={quest}
          />))}
      </div>
    </>
  );
}
