import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Court {
    id: number;
    name: string;
    location: string;
    game: string;
    price: string;
    rating: number;
    image: string;
}

interface Booking {
    id: number;
    court: string;
    date: string;
    game: string;
}

interface PlayerState {
    popularCourts: Court[];
    upcomingBookings: Booking[];
    bookingHistory: any[];
    notifications: any[];
    location: string;
}

const initialState: PlayerState = {
    popularCourts: [],
    upcomingBookings: [],
    bookingHistory: [],
    notifications: [],
    location: 'Mumbai, Maharashtra',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPopularCourts: (state, action: PayloadAction<Court[]>) => {
            state.popularCourts = action.payload;
        },
        setUpcomingBookings: (state, action: PayloadAction<Booking[]>) => {
            state.upcomingBookings = action.payload;
        },
        setBookingHistory: (state, action: PayloadAction<any[]>) => {
            state.bookingHistory = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setNotifications: (state, action: PayloadAction<any[]>) => {
            state.notifications = action.payload;
        },
    },
});

export const {
    setPopularCourts,
    setUpcomingBookings,
    setBookingHistory,
    setLocation,
    setNotifications
} = playerSlice.actions;
export default playerSlice.reducer;
