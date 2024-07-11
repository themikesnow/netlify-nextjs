import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: 'dark',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
export const selectTheme = (state: AppState) => state.theme;

export default appSlice.reducer;
