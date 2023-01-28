import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  value: number;
}

export const initialState: GlobalState = {
  value: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = globalSlice.actions;

export default globalSlice.reducer;
