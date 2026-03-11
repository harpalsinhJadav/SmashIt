import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OwnerState {
    dashboardData: any | null;
    courts: any[];
    courtDetail: any | null;
    salesData: any | null;
    profileData: any | null;
}

const initialState: OwnerState = {
    dashboardData: null,
    courts: [],
    courtDetail: null,
    salesData: null,
    profileData: null,
};

const ownerSlice = createSlice({
    name: 'owner',
    initialState,
    reducers: {
        setDashboardData: (state, action: PayloadAction<any>) => {
            state.dashboardData = action.payload;
        },
        setOwnerCourts: (state, action: PayloadAction<any[]>) => {
            state.courts = action.payload;
        },
        setCourtDetail: (state, action: PayloadAction<any>) => {
            state.courtDetail = action.payload;
        },
        setSalesData: (state, action: PayloadAction<any>) => {
            state.salesData = action.payload;
        },
        setOwnerProfile: (state, action: PayloadAction<any>) => {
            state.profileData = action.payload;
        },
    },
});

export const {
    setDashboardData,
    setOwnerCourts,
    setCourtDetail,
    setSalesData,
    setOwnerProfile,
} = ownerSlice.actions;
export default ownerSlice.reducer;
