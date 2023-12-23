import { useEffect } from 'react';
import FilterForm from '../../components/filter-form/filter-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuests } from '../../store/api-actions';
import { selectQuests } from '../../store/data-process/selectors';
import QuestsList from '../../components/quests-list/quests-list';

export default function MainScreen(): JSX.Element {
  const quests = useAppSelector(selectQuests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuests());
  }, [dispatch]);

  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <FilterForm />
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestsList quests={quests}/>
      </div>
    </main>
  );
}
