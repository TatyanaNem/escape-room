import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LEVEL_FILTER, DEFAULT_TYPE_FILTER, NameSpace, RequestStatus } from '../../const';
import { TDataProcess } from '../../types/state';
import { fetchQuests } from '../api-actions';

const initialState: TDataProcess = {
  quests: [],
  activeQuest: null,
  fetchingQuestsStatus: RequestStatus.Idle,
  fetchingActiveQuest: RequestStatus.Idle,
  currentLevelFilter: DEFAULT_LEVEL_FILTER,
  currentTypeFilter: DEFAULT_TYPE_FILTER
};

export const dataProcess = createSlice({
  name: NameSpace.DataProcess,
  initialState,
  reducers: {},
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
      });
  }
});
