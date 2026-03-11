import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '../../../../src/screens/Home/home.screen';

jest.mock('../../../../src/screens/Home/home.hooks', () => ({
    useHome: () => ({
        t: (key: string) => key,
        colors: { primary: '#007AFF', background: '#FFFFFF', surface: '#F0F7FF', text: '#000', textSecondary: '#8E8E93', border: '#C6C6C8', white: '#FFFFFF', accent: '#9333EA' },
        isDark: false,
        isLoading: false,
        popularCourts: [{ id: 1, name: 'Arena', game: 'Badminton', location: 'Downtown', price: '₹500/hr', image: '' }],
        upcomingBookings: [{ id: 1, court: 'Arena', date: 'Today', game: 'Badminton' }],
        location: 'Mumbai',
        handleCourtPress: jest.fn(),
        handleBookingPress: jest.fn(),
        handleMyBookings: jest.fn(),
        handleViewAllCourts: jest.fn(),
        handleBookACourt: jest.fn(),
        handleNotifications: jest.fn(),
        refetch: jest.fn(),
    })
}));

describe('HomeScreen', () => {
    it('renders the home screen with location and actions', () => {
        const { getByText } = render(<HomeScreen />);
        expect(getByText('Mumbai')).toBeTruthy();
        expect(getByText('home.bookACourt')).toBeTruthy();
        expect(getByText('home.myBookings')).toBeTruthy();
    });

    it('renders upcoming bookings', () => {
        const { getByText } = render(<HomeScreen />);
        expect(getByText('home.upcomingBookings')).toBeTruthy();
    });

    it('renders popular courts section', () => {
        const { getByText } = render(<HomeScreen />);
        expect(getByText('home.popularCourts')).toBeTruthy();
    });
});
