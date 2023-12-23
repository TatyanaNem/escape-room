import { TIcon } from "../../types/filter-item";

type FilterItemProps = {
  id: string;
  value: string;
  name: string;
  icon?: TIcon;
  checked: boolean;
  labelText: string;
  onChange: () => void;

}

export default function FilterItem ({id, value, name, icon, checked, labelText, onChange}: FilterItemProps) {
  return (
    <li key={id} className="filter__item">
      <input
        type="radio"
        name="type"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        className="filter__label"
        htmlFor={name}
      >
        {
          icon && <svg
            className="filter__icon"
            width={icon.width}
            height={icon.height}
            aria-hidden="true"
          >
            <use xlinkHref={`#icon-${icon.title}`}></use>
          </svg>
        }
        <span className="filter__label-text">{labelText}</span>
      </label>
    </li>
  );
}
