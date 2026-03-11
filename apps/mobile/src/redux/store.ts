import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appReducer from './slices/appSlice';
import playerReducer from './slices/playerSlice';
import ownerReducer from './slices/ownerSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        player: playerReducer,
        owner: ownerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
