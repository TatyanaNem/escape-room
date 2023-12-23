import { useState } from "react";
import { TFilterItem } from "../../types/filter-item";
import FilterItem from "../filter-item/filter-item";

type FilterListProps = {
  checkedItem: TFilterItem;
  filtersSet: {[key: string]: TFilterItem};
}

export default function FilterList ({checkedItem, filtersSet}: FilterListProps) {
  const [checkedValue, setCheckedValue] = useState(checkedItem);
  return (
    <ul className="filter__list">
          {
            Object.values(filtersSet)
              .map((item) => {
                return (<FilterItem
                  id={item.name}
                  value={item.name}
                  name={item.name}
                  icon={item.icon}
                  checked={item === checkedValue}
                  labelText={item.labelText}
                  onChange={() => setCheckedValue(item)}
                />)
              })
          }
        </ul>
  );
}
