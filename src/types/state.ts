import { AuthorizationStatus, FilterLevel, FilterType, RequestStatus } from '../const';
import { store } from '../store';
import { TBookingInfo } from './booking-info';
import { TMyQuest, TQuest, TQuestReview } from './quest';
import { TUser } from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TUserProcess = {
  authStatus: AuthorizationStatus;
  user: null | TUser;
  loginSendingStatus: RequestStatus;
}

export type TDataProcess = {
  quests: TQuestReview[];
  activeQuest: null | TQuest;
  myQuests: TMyQuest[];
  questBookingInfo: null | TBookingInfo[];
  fetchingQuestsStatus: RequestStatus;
  fetchingActiveQuestStatus: RequestStatus;
  sendingBookingStatus: RequestStatus;
  deletingBookingStatus: RequestStatus;
  currentLevelFilter: FilterLevel;
  currentTypeFilter: FilterType;
}

export type TAppProcess = {
  error: string | null;
}
