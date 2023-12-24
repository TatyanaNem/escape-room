import styles from './no-quests.module.css';

export default function NoQuests(): JSX.Element {
  return (
    <div className={styles.cards__empty}>
      <h3 className={styles.cards__status}>Нет доступных квестов данного типа и уровня сложности</h3>
    </div>
  );
}
