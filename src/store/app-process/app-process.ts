import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TAppProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: TAppProcess = {
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state, action: PayloadAction<{message: string | null; delay: number}>) => {
      state.error = action.payload.message;
    },
  }
});

export const {setError, clearError} = appProcess.actions;
