import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { dataProcess } from './data-process/data-process';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.UserProcess]: userProcess.reducer,
  [NameSpace.DataProcess]: dataProcess.reducer,
  [NameSpace.AppProcess]: appProcess.reducer,
});
