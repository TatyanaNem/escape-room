import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationStatus, NameSpace, RequestStatus } from "../../const";
import { TUserProcess } from "../../types/state";
import { checkAuth } from "../api-actions";

const initialState: TUserProcess = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  loginSendingStatus: RequestStatus.Idle
}

export const userProcess = createSlice({
  name: NameSpace.UserProcess,
  initialState,
  reducers: {},
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
  }
})
