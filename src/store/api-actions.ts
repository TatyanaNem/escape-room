import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from '../types/user';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { TQuestReview } from '../types/quest';

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
