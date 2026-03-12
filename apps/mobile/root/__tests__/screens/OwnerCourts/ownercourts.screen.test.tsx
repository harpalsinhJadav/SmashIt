import { render } from '@testing-library/react-native';
import React from 'react';

import { OwnerCourtsScreen } from '../../../../src/screens/OwnerCourts/ownercourts.screen';

jest.mock('../../../../src/screens/OwnerCourts/ownercourts.hooks', () => ({
  useOwnerCourtsList: () => ({
    t: (key: string) => key,
    colors: {
      primary: '#007AFF',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      text: '#000',
      textSecondary: '#8E8E93',
      border: '#C6C6C8',
      white: '#FFFFFF',
    },
    courts: [
      {
        id: 1,
        name: 'Arena Sports Complex',
        location: 'Downtown',
        game: 'Badminton',
        status: 'active',
        todayBookings: 8,
        revenue: '₹4,000',
        image: '',
      },
    ],
    isLoading: false,
    handleNotifications: jest.fn(),
    handleAddNewCourt: jest.fn(),
    handleManageCourt: jest.fn(),
    refetch: jest.fn(),
  }),
}));

describe('OwnerCourtsScreen', () => {
  it('renders the courts list screen', () => {
    const { getByText } = render(<OwnerCourtsScreen />);
    expect(getByText('ownerCourts.title')).toBeTruthy();
    expect(getByText('ownerCourts.addNewCourt')).toBeTruthy();
  });
});
