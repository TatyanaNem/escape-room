import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectAuthStatus = (state: State) => state[NameSpace.UserProcess].authStatus;
export const selectLoginSendingStatus = (state: State) => state[NameSpace.UserProcess].loginSendingStatus;
