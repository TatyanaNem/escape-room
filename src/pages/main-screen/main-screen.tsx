import { useEffect } from 'react';
import FilterForm from '../../components/filter-form/filter-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuests } from '../../store/api-actions';
import { selectLevelFilter, selectQuests, selectTypeFilter } from '../../store/data-process/selectors';
import QuestsList from '../../components/quests-list/quests-list';
import { filterItems } from '../../utils/filter';
import NoQuests from '../../components/no-quests/no-quests';

export default function MainScreen(): JSX.Element {
  const quests = useAppSelector(selectQuests);
  const dispatch = useAppDispatch();
  const levelFilter = useAppSelector(selectLevelFilter);
  const typeFilter = useAppSelector(selectTypeFilter);

  const filteredQuests = filterItems(quests, typeFilter, levelFilter);

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
        {
          filteredQuests.length === 0
            ? <NoQuests />
            : <QuestsList quests={filteredQuests}/>
        }
      </div>
    </main>
  );
}
