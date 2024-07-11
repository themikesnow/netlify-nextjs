import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@app-store';
import { User } from '@app-types';

import type { PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isLoggedIn: boolean;
  refreshToken: string | null;
  token: string | null;
  user: User | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false } as AuthState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setCredentials: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      if (action.payload.token) {
        state.isLoggedIn = true;
        window.localStorage.setItem('token', action.payload.token);
        window.localStorage.setItem('refreshToken', action.payload.refreshToken);
      } else {
        state.isLoggedIn = false;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('refreshToken');
      }
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn;
