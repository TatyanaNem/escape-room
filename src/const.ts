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
