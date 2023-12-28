import FilterItem from '../filter-item/filter-item';
import { FilterLevel, FilterType, LevelFilter, TypeFilter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentLevelFilter, setCurrentTypeFilter } from '../../store/data-process/data-process';
import { selectLevelFilter, selectTypeFilter } from '../../store/data-process/selectors';
import { useCallback } from 'react';

export default function FilterList (): JSX.Element {
  const levelFilter = useAppSelector(selectLevelFilter);
  const typeFilter = useAppSelector(selectTypeFilter);
  const dispatch = useAppDispatch();

  const handleTypeFilterChange = useCallback((filter: FilterType) => {
    dispatch(setCurrentTypeFilter(filter));
  }, [dispatch]);

  const handleLevelFilterChange = useCallback((filter: FilterLevel) => {
    dispatch(setCurrentLevelFilter(filter));
  }, [dispatch]);

  return (
    <>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {
            TypeFilter
              .map((item) => (
                <FilterItem
                  key={item.name}
                  id={item.name}
                  value={item.name}
                  name="type"
                  icon={item.icon}
                  checked={item.name === typeFilter}
                  labelText={item.labelText}
                  onChange={() => handleTypeFilterChange(item.name)}
                />))
          }
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {
            LevelFilter
              .map((item) => (
                <FilterItem
                  key={item.name}
                  id={item.name}
                  value={item.name}
                  name="level"
                  checked={item.name === levelFilter}
                  labelText={item.labelText}
                  onChange={() => handleLevelFilterChange(item.name)}
                />))
          }
        </ul>
      </fieldset>
    </>
  );
}
