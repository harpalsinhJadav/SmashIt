import { render } from '@testing-library/react-native';
import React from 'react';

import { OwnerProfileScreen } from '../../../../src/screens/OwnerProfile/ownerprofile.screen';

jest.mock('../../../../src/screens/OwnerProfile/ownerprofile.hooks', () => ({
  useOwnerProfileScreen: () => ({
    t: (key: string) => key,
    colors: {
      primary: '#007AFF',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      text: '#000',
      textSecondary: '#8E8E93',
      border: '#C6C6C8',
      white: '#FFFFFF',
      error: '#FF3B30',
    },
    profileData: {
      name: 'Amit Verma',
      email: 'amit.verma@example.com',
      phone: '+91 99999 88888',
      location: 'Mumbai, Maharashtra',
      stats: { courts: 3, assistants: 2, bookings: 156 },
    },
    isLoading: false,
    handleNotifications: jest.fn(),
    handleLogout: jest.fn(),
    handleEditLocation: jest.fn(),
    handleDeleteAccount: jest.fn(),
    refetch: jest.fn(),
  }),
}));

describe('OwnerProfileScreen', () => {
  it('renders profile info from API', () => {
    const { getByText } = render(<OwnerProfileScreen />);
    expect(getByText('Amit Verma')).toBeTruthy();
    expect(getByText('amit.verma@example.com')).toBeTruthy();
    expect(getByText('+91 99999 88888')).toBeTruthy();
  });

  it('renders business stats from API', () => {
    const { getByText } = render(<OwnerProfileScreen />);
    expect(getByText('3')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('156')).toBeTruthy();
  });

  it('renders action buttons', () => {
    const { getByText } = render(<OwnerProfileScreen />);
    expect(getByText('ownerProfile.logout')).toBeTruthy();
    expect(getByText('ownerProfile.deleteAccount')).toBeTruthy();
  });
});
