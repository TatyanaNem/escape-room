import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LEVEL_FILTER, DEFAULT_TYPE_FILTER, FilterLevel, FilterType, NameSpace, RequestStatus } from '../../const';
import { TDataProcess } from '../../types/state';
import { deleteBooking, fetchActiveQuest, fetchMyQuests, fetchQuestBookingInfo, fetchQuests, postNewBooking } from '../api-actions';

const initialState: TDataProcess = {
  quests: [],
  activeQuest: null,
  myQuests: [],
  questBookingInfo: null,
  fetchingQuestsStatus: RequestStatus.Idle,
  fetchingActiveQuestStatus: RequestStatus.Idle,
  sendingBookingStatus: RequestStatus.Idle,
  deletingBookingStatus: RequestStatus.Idle,
  currentLevelFilter: DEFAULT_LEVEL_FILTER,
  currentTypeFilter: DEFAULT_TYPE_FILTER
};

export const dataProcess = createSlice({
  name: NameSpace.DataProcess,
  initialState,
  reducers: {
    setCurrentTypeFilter: (state, action: PayloadAction<FilterType>) => {
      state.currentTypeFilter = action.payload;
    },
    setCurrentLevelFilter: (state, action: PayloadAction<FilterLevel>) => {
      state.currentLevelFilter = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Loading;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.fetchingQuestsStatus = RequestStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Error;
      })
      .addCase(fetchActiveQuest.pending, (state) => {
        state.fetchingActiveQuestStatus = RequestStatus.Loading;
      })
      .addCase(fetchActiveQuest.fulfilled, (state, action) => {
        state.fetchingActiveQuestStatus = RequestStatus.Success;
        state.activeQuest = action.payload;
      })
      .addCase(fetchActiveQuest.rejected, (state) => {
        state.fetchingActiveQuestStatus = RequestStatus.Error;
      })
      .addCase(fetchMyQuests.pending, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Loading;
      })
      .addCase(fetchMyQuests.fulfilled, (state, action) => {
        state.fetchingQuestsStatus = RequestStatus.Success;
        state.myQuests = action.payload;
      })
      .addCase(fetchMyQuests.rejected, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Error;
      })
      .addCase(fetchQuestBookingInfo.pending, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Loading;
      })
      .addCase(fetchQuestBookingInfo.fulfilled, (state, action) => {
        state.fetchingQuestsStatus = RequestStatus.Success;
        state.questBookingInfo = action.payload;
      })
      .addCase(fetchQuestBookingInfo.rejected, (state) => {
        state.fetchingQuestsStatus = RequestStatus.Error;
      })
      .addCase(postNewBooking.pending, (state) => {
        state.sendingBookingStatus = RequestStatus.Loading;
      })
      .addCase(postNewBooking.fulfilled, (state) => {
        state.sendingBookingStatus = RequestStatus.Success;
      })
      .addCase(postNewBooking.rejected, (state) => {
        state.sendingBookingStatus = RequestStatus.Error;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.deletingBookingStatus = RequestStatus.Loading;
      })
      .addCase(deleteBooking.fulfilled, (state) => {
        state.deletingBookingStatus = RequestStatus.Success;
      });
  }
});

export const {setCurrentTypeFilter, setCurrentLevelFilter} = dataProcess.actions;
