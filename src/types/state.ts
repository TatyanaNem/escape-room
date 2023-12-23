import { AuthorizationStatus, RequestStatus } from "../const";
import { store } from "../store";
import { TUser } from "./user";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TUserProcess = {
  authStatus: AuthorizationStatus;
  user: null | TUser;
  loginSendingStatus: RequestStatus;
}
