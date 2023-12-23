import { FilterLevel, FilterType } from '../const';

export type TIcon = {
  title: string;
  width: string;
  height: string;
}

export type TFilterItem = {
  name: FilterLevel | FilterType;
  labelText: string;
  icon?: TIcon;
}
