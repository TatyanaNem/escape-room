import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from '../types/user';
import { AppDispatch, State } from '../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute, HttpStatus } from '../const';
import { TMyQuest, TQuest, TQuestReview } from '../types/quest';
import { TLoginData } from '../types/login-data';
import { dropToken, setToken } from '../services/token';
import { redirectToRoute } from './actions';
import { TBookingInfo } from '../types/booking-info';
import { TNewQuestData } from '../types/new-quest-data';

type TExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

type BookingData = {
  newQuestForBooking: TNewQuestData;
  id: string;
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

export const fetchMyQuests = createAsyncThunk<TMyQuest[], undefined, TExtra>(
  'data/fetchMyQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TMyQuest[]>(APIRoute.MyQuests);
    return data;
  }
);

export const fetchQuestBookingInfo = createAsyncThunk<TBookingInfo[], TQuest['id'], TExtra>(
  'data/fetchBookingInfo',
  async (questId, {extra: api}) => {
    const {data} = await api.get<TBookingInfo[]>(`${AppRoute.Quest}/${questId}${AppRoute.Booking}`);
    return data;
  }
);

export const postNewBooking = createAsyncThunk<TMyQuest, BookingData, TExtra>(
  'data/bookNewQuest',
  async ({newQuestForBooking, id}, {extra: api, rejectWithValue, dispatch}) => {
    try {
      const {data} = await api.post<TMyQuest>(`${AppRoute.Quest}/${id}${AppRoute.Booking}`, newQuestForBooking);
      dispatch(redirectToRoute(AppRoute.MyQuests));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === HttpStatus.BadRequest) {
          return rejectWithValue('Bad Request: Some data is missing or invalid.');
        } else {
          return rejectWithValue('An error accured while sending the request');
        }
      } else {
        return rejectWithValue('Unknown error during boking the quest.');
      }
    }
  }
);

export const deleteBooking = createAsyncThunk<void, TMyQuest['id'], TExtra>(
  'data/deleteBoking',
  async (bookingId, {extra: api, rejectWithValue, dispatch}) => {
    try {
      await api.delete(`${APIRoute.MyQuests}/${bookingId}`);
      dispatch(fetchMyQuests());
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
