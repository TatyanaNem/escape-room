import { TQuestReview } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type TQuestsListProps = {
  quests: TQuestReview[];
}

export default function QuestsList({quests}: TQuestsListProps): JSX.Element {
  return (
    <>
      <h2 className="title visually-hidden">Выберите квест</h2>
      <div className="cards-grid">
        {quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
          />))}
      </div>
    </>
  );
}
