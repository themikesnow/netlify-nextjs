import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
