import { render } from '@testing-library/react-native';
import React from 'react';

import { OwnerSalesScreen } from '../../../../src/screens/OwnerSales/ownersales.screen';

jest.mock('../../../../src/screens/OwnerSales/ownersales.hooks', () => ({
  useOwnerSalesScreen: () => ({
    t: (key: string) => key,
    colors: {
      primary: '#16a34a',
      background: '#ffffff',
      surface: '#f9fafb',
      text: '#111827',
      textSecondary: '#6b7280',
      border: '#e5e7eb',
    },
    filter: 'month',
    setFilter: jest.fn(),
    salesData: {
      stats: [{ label: 'totalRevenue', value: '₹2,45,600', color: '#16a34a' }],
      chartData: [{ name: 'Mon', revenue: 12000 }],
      courtWiseSales: [
        { court: 'Arena Sports Complex', bookings: 156, revenue: '₹78,400' },
      ],
    },
    isLoading: false,
    refetch: jest.fn(),
    handleNotifications: jest.fn(),
    handleExport: jest.fn(),
  }),
}));

describe('OwnerSalesScreen', () => {
  it('renders sales stats successfully', () => {
    const { getByText } = render(<OwnerSalesScreen />);
    expect(getByText('ownerSales.title')).toBeTruthy();
    expect(getByText('₹2,45,600')).toBeTruthy();
    expect(getByText('Arena Sports Complex')).toBeTruthy();
  });
});
