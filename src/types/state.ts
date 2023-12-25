import { AuthorizationStatus, FilterLevel, FilterType, RequestStatus } from '../const';
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
  myQuests: TQuestReview[];
  fetchingQuestsStatus: RequestStatus;
  fetchingActiveQuestStatus: RequestStatus;
  currentLevelFilter: FilterLevel;
  currentTypeFilter: FilterType;
}
