import { DEFAULT_DIFFICULTY_FILTER, DEFAULT_THEME_FILTER, DifficultyFilter, ThemeFilter } from "../../const";
import FilterList from "../filter-list/filter-list";

export default function FilterForm(): JSX.Element {

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <FilterList checkedItem={DEFAULT_THEME_FILTER} filtersSet={ThemeFilter}/>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <FilterList checkedItem={DEFAULT_DIFFICULTY_FILTER} filtersSet={DifficultyFilter}/>
      </fieldset>
    </form>
  );
}
