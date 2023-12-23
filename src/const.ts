export enum AppRoute {
  Root = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest/:id',
  Booking = '/booking/:id',
  MyQuests = '/my-quests',
  NotFound = '/page404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ThemeFilter = {
  All: {name: 'all', labelText: 'Все квесты', icon: {title: 'all-quests', width: '26', height: '30'}},
  Adventure: {name: 'adventure', labelText: 'Приключения', icon: {title: 'adventure', width: '36', height: '30'}},
  Horror: {name: 'horror', labelText: 'Ужасы', icon: {title: 'horror', width: '30', height: '30'}},
  Mystic: {name: 'mystic', labelText: 'Мистика', icon: {title: 'mystic', width: '30', height: '30'}},
  Detective: {name: 'detective', labelText: 'Детектив', icon: {title: 'detective', width: '40', height: '30'}},
  SciFi: {name: 'sci-fi', labelText: 'Sci-fi', icon: {title: 'sci-fi', width: '28', height: '30'}}
}

export const DEFAULT_THEME_FILTER = ThemeFilter.All;

export const DifficultyFilter = {
  Any: {name: 'any', labelText: 'Любой'},
  Easy: {name: 'easy', labelText: 'Лёгкий'},
  Medium:{ name: 'medium', labelText: 'Средний'},
  Hard: {name: 'hard', labelText: 'Сложный'}
}

export const DEFAULT_DIFFICULTY_FILTER = DifficultyFilter.Any;

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
}
