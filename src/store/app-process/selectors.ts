import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectErrorMessage = (state: State) => state[NameSpace.AppProcess].error;
