import React from 'react';
import { render } from '@testing-library/react-native';
import { OwnerAddCourtScreen } from '../../../../src/screens/OwnerAddCourt/owneraddcourt.screen';

jest.mock('../../../../src/screens/OwnerAddCourt/owneraddcourt.hooks', () => ({
    useOwnerAddCourt: () => ({
        t: (key: string) => key,
        colors: { primary: '#007AFF', background: '#FFFFFF', surface: '#F0F7FF', text: '#000', textSecondary: '#8E8E93', border: '#C6C6C8', white: '#FFFFFF' },
        form: { courtName: '', location: '', gameType: 'Badminton', minDuration: '60', maxDuration: '120', allowDynamic: false, facilities: '', status: 'active' },
        handleBack: jest.fn(),
        handleChange: jest.fn(),
        toggleDynamic: jest.fn(),
        handleSubmit: jest.fn(),
    })
}));

describe('OwnerAddCourtScreen', () => {
    it('renders the add court form', () => {
        const { getByText } = render(<OwnerAddCourtScreen />);
        expect(getByText('ownerAddCourt.title')).toBeTruthy();
        expect(getByText('ownerAddCourt.addCourt')).toBeTruthy();
    });
});
