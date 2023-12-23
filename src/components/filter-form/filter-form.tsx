import { DEFAULT_LEVEL_FILTER, DEFAULT_TYPE_FILTER, LevelFilter, TypeFilter } from '../../const';
import FilterList from '../filter-list/filter-list';

export default function FilterForm(): JSX.Element {

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <FilterList checkedItem={DEFAULT_TYPE_FILTER} filtersSet={TypeFilter}/>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <FilterList checkedItem={DEFAULT_LEVEL_FILTER} filtersSet={LevelFilter}/>
      </fieldset>
    </form>
  );
}
