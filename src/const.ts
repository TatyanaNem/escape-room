import { TBookingInfo } from './types/booking-info';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest',
  Booking = '/booking',
  MyQuests = '/my-quests',
  NotFound = '/page404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilterType {
  All = 'all',
  Adventure = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const TypeFilter = [
  {name: FilterType.All, labelText: 'Все квесты', icon: {title: 'all-quests', width: '26', height: '30'}},
  {name: FilterType.Adventure, labelText: 'Приключения', icon: {title: 'adventure', width: '36', height: '30'}},
  {name: FilterType.Horror, labelText: 'Ужасы', icon: {title: 'horror', width: '30', height: '30'}},
  {name: FilterType.Mystic, labelText: 'Мистика', icon: {title: 'mystic', width: '30', height: '30'}},
  {name: FilterType.Detective, labelText: 'Детектив', icon: {title: 'detective', width: '40', height: '30'}},
  {name: FilterType.SciFi, labelText: 'Sci-fi', icon: {title: 'sci-fi', width: '28', height: '30'}}
];

export const DEFAULT_TYPE_FILTER = FilterType.All;

export enum FilterLevel {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const LevelFilter = [
  {name: FilterLevel.Any, labelText: 'Любой'},
  {name: FilterLevel.Easy, labelText: 'Лёгкий'},
  { name: FilterLevel.Medium, labelText: 'Средний'},
  {name: FilterLevel.Hard, labelText: 'Сложный'}
];

export const DEFAULT_LEVEL_FILTER = FilterLevel.Any;

export const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Quests = '/quest',
  Booking = '/booking',
  MyQuests = '/reservation',
  Login = '/login',
  Logout = '/logout',
}

export enum RequestStatus {
  Loading ='Loading',
  Idle = 'Idle',
  Error = 'Error',
  Success = 'Success'
}

export enum NameSpace {
  UserProcess = 'USER_PROCESS',
  DataProcess = 'DATA_PROCESS',
  AppProcess = 'APP_PROCESS',
}

export const HttpStatus = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
} as const;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum BookingDate {
  Today = 'today',
  Tomorrow = 'tomorrow'
}

export const CityForMap: TBookingInfo = {
  id: '1',
  location: {
    address: 'Набережная реки Карповка, д 5П',
    coords: [59.968322, 30.31735]
  }
};

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';
export const URL_MARKER_CURRENT = 'img/svg/pin-active.svg';
