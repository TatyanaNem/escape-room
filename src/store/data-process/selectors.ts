import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectQuests = (state: State) => state[NameSpace.DataProcess].quests;
export const selectActiveQuestFetchingStatus = (state: State) => state[NameSpace.DataProcess].fetchingActiveQuestStatus;
export const selectActiveQuest = (state: State) => state[NameSpace.DataProcess].activeQuest;
