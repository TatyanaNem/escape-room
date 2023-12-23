import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/state';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
