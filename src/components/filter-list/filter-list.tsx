import FilterItem from '../filter-item/filter-item';
import { FilterLevel, FilterType, LevelFilter, TypeFilter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentLevelFilter, setCurrentTypeFilter } from '../../store/data-process/data-process';
import { selectLevelFilter, selectTypeFilter } from '../../store/data-process/selectors';

export default function FilterList (): JSX.Element {
  const levelFilter = useAppSelector(selectLevelFilter);
  const typeFilter = useAppSelector(selectTypeFilter);
  const dispatch = useAppDispatch();

  function onChangeTypeFilterHandler (filter: FilterType) {
    dispatch(setCurrentTypeFilter(filter));
  }

  function onChangeLevelFilterHandler (filter: FilterLevel) {
    dispatch(setCurrentLevelFilter(filter));
  }

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
                  onChange={() => onChangeTypeFilterHandler(item.name)}
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
                  onChange={() => onChangeLevelFilterHandler(item.name)}
                />))
          }
        </ul>
      </fieldset>
    </>
  );
}
