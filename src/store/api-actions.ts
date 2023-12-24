import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from '../types/user';
import { AppDispatch, State } from '../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute, HttpStatus } from '../const';
import { TQuest, TQuestReview } from '../types/quest';
import { TLoginData } from '../types/login-data';
import { dropToken, setToken } from '../services/token';
import { redirectToRoute } from './actions';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const checkAuth = createAsyncThunk<TUser, undefined, TExtra>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUser>(APIRoute.Login);
    return data;
  }
);

export const fetchQuests = createAsyncThunk<TQuestReview[], undefined, TExtra>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TQuestReview[]>(APIRoute.Quests);
    return data;
  }
);

export const fetchActiveQuest = createAsyncThunk<TQuest, TQuest['id'], TExtra>(
  'data/fetchActiveQuest',
  async (questId, {extra: api}) => {
    const {data} = await api.get<TQuest>(`${APIRoute.Quests}/${questId}`);
    return data;
  }
);

export const login = createAsyncThunk<TUser, TLoginData, TExtra>(
  'user/login',
  async ({email, password}, {extra: api, rejectWithValue, dispatch}) => {
    try {
      const {data} = await api.post<TUser>(APIRoute.Login, {email, password});
      setToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === HttpStatus.BadRequest) {
          return rejectWithValue('Bad Request: Some data is missing or invalid.');
        } else {
          return rejectWithValue('An error accured while logging in');
        }
      } else {
        return rejectWithValue('Unknown error during login.');
      }
    }
  }
);

export const logout = createAsyncThunk<void, undefined, TExtra>(
  'user/logout',
  async (_arg, {extra: api, dispatch}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Root));
  },
);
