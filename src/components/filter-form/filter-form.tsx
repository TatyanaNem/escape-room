import FilterList from '../filter-list/filter-list';

export default function FilterForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <FilterList />
    </form>
  );
}
