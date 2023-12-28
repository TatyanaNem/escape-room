import { useEffect, useMemo } from 'react';
import FilterForm from '../../components/filter-form/filter-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuests } from '../../store/api-actions';
import { selectFetchingQuestsStatus, selectLevelFilter, selectQuests, selectTypeFilter } from '../../store/data-process/selectors';
import QuestsList from '../../components/quests-list/quests-list';
import { filterItems } from '../../utils/filter';
import NoQuests from '../../components/no-quests/no-quests';
import { RequestStatus } from '../../const';
import { Spinner } from '../../components/spinner/spinner';

export default function MainScreen(): JSX.Element {
  const quests = useAppSelector(selectQuests);
  const dispatch = useAppDispatch();
  const levelFilter = useAppSelector(selectLevelFilter);
  const typeFilter = useAppSelector(selectTypeFilter);
  const fetchingStatus = useAppSelector(selectFetchingQuestsStatus);

  const filteredQuests = useMemo(
    () => filterItems(quests, typeFilter, levelFilter),
    [typeFilter, levelFilter, quests]
  );

  useEffect(() => {
    dispatch(fetchQuests());
  }, [dispatch]);

  if (fetchingStatus === RequestStatus.Loading) {
    return <Spinner/>;
  }

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
        {
          filteredQuests.length === 0
            ? <NoQuests block='quests'/>
            : <QuestsList quests={filteredQuests}/>
        }
      </div>
    </main>
  );
}
