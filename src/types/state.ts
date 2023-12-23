import { AuthorizationStatus, LevelFilter, RequestStatus, TypeFilter } from '../const';
import { store } from '../store';
import { TQuest, TQuestReview } from './quest';
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
  fetchingQuestsStatus: RequestStatus;
  fetchingActiveQuest: RequestStatus;
  currentLevelFilter: typeof LevelFilter[keyof typeof LevelFilter];
  currentTypeFilter: typeof TypeFilter[keyof typeof TypeFilter];
}
