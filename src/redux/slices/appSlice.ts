import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    isLoading: boolean;
    user: any | null;
    role: 'admin' | 'player' | 'owner' | 'assistant' | null;
    error: string | null;
}

const initialState: AppState = {
    isLoading: false,
    user: null,
    role: null,
    error: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setRole: (state, action: PayloadAction<'admin' | 'player' | 'owner' | 'assistant' | null>) => {
            state.role = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setUser, setRole, setError } = appSlice.actions;
export default appSlice.reducer;
