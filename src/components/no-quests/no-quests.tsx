import styles from './no-quests.module.css';

type NoQuestsProps = {
  block: string;
}

export default function NoQuests({block}: NoQuestsProps): JSX.Element {
  return (
    <div className={styles.cards__empty}>
      <h3 className={styles.cards__status}>
        {
          block === 'quests'
            ? 'Нет доступных квестов данного типа и уровня сложности'
            : 'Список забронированных квестов пуст.'
        }
      </h3>
    </div>
  );
}
