import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LEVEL_FILTER, DEFAULT_TYPE_FILTER, FilterLevel, FilterType, NameSpace, RequestStatus } from '../../const';
import { TDataProcess } from '../../types/state';
import { fetchActiveQuest, fetchMyQuests, fetchQuests } from '../api-actions';

const initialState: TDataProcess = {
  quests: [],
  activeQuest: null,
  myQuests: [],
  fetchingQuestsStatus: RequestStatus.Idle,
  fetchingActiveQuestStatus: RequestStatus.Idle,
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
      });
  }
});

export const {setCurrentTypeFilter, setCurrentLevelFilter} = dataProcess.actions;
