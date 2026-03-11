import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { OwnerDashboardScreen } from '../../../../src/screens/OwnerDashboard/ownerdashboard.screen';

jest.mock('../../../../src/screens/OwnerDashboard/ownerdashboard.hooks', () => ({
    useOwnerDashboard: () => ({
        t: (key: string) => key,
        colors: { primary: '#007AFF', background: '#FFFFFF', surface: '#F0F7FF', text: '#000', textSecondary: '#8E8E93', border: '#C6C6C8', white: '#FFFFFF', accent: '#9333EA', statBlue: '#3B82F6', statGreen: '#10B981', statPurple: '#8B5CF6', statOrange: '#F59E0B' },
        isLoading: false,
        data: {
            stats: [
                { id: 'bookings', label: 'totalBookings', value: '156', change: '+12%', color: 'blue' },
                { id: 'revenue', label: 'revenue', value: '₹78,400', change: '+18%', color: 'green' },
            ],
            recentBookings: [
                { id: 1, court: 'Court A', player: 'Rahul S.', time: 'Today', amount: '₹500' },
            ],
            myCourts: [
                { id: 1, name: 'Arena', status: 'active', bookings: 45 },
            ]
        },
        handleNotifications: jest.fn(),
        handleAddNewCourt: jest.fn(),
        handleViewSales: jest.fn(),
        handleViewAllCourts: jest.fn(),
        handleCourtPress: jest.fn(),
        refetch: jest.fn(),
    })
}));

describe('OwnerDashboardScreen', () => {
    it('renders dashboard with stats', () => {
        const { getByText } = render(<OwnerDashboardScreen />);
        expect(getByText('156')).toBeTruthy();
        expect(getByText('₹78,400')).toBeTruthy();
    });

    it('renders recent bookings', () => {
        const { getByText } = render(<OwnerDashboardScreen />);
        expect(getByText('ownerDashboard.recentBookings')).toBeTruthy();
    });
});
