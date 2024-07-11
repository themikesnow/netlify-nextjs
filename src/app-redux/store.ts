import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';

import { appApi } from './features/api/appApi';
import appSliceReducer from './features/slice/appSlice';
import authReducer from './features/slice/authSlice';

const reducers = combineReducers({
  app: appSliceReducer,
  auth: authReducer,
  [appApi.reducerPath]: appApi.reducer,
});

// const persistConfig = {
//   key: 'root',
//   // storage,
//   blacklist: [appApi.reducerPath],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: reducers,
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(appApi.middleware).concat(thunk),
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(appApi.middleware),
  // middleware: [thunk, appApi.middleware],
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(appApi.middleware),

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
