import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectQuests = (state: State) => state[NameSpace.DataProcess].quests;
