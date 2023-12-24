import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';
import { TUserProcess } from '../../types/state';
import { checkAuth, login, logout } from '../api-actions';

const initialState: TUserProcess = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  loginSendingStatus: RequestStatus.Idle
};

export const userProcess = createSlice({
  name: NameSpace.UserProcess,
  initialState,
  reducers: {
    setSendingStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.loginSendingStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.user = null;
        state.authStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.loginSendingStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginSendingStatus = RequestStatus.Success;
        state.user = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.loginSendingStatus = RequestStatus.Error;
        state.user = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setSendingStatus} = userProcess.actions;
