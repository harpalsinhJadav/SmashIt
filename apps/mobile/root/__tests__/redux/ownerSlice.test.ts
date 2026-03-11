import ownerReducer, {
    setDashboardData,
    setOwnerCourts,
    setCourtDetail,
    setSalesData,
    setOwnerProfile,
} from '../../../src/redux/slices/ownerSlice';

describe('ownerSlice', () => {
    const initialState = {
        dashboardData: null,
        courts: [],
        courtDetail: null,
        salesData: null,
        profileData: null,
    };

    it('should return the initial state', () => {
        expect(ownerReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle setDashboardData', () => {
        const data = { stats: [], recentBookings: [] };
        const state = ownerReducer(initialState, setDashboardData(data));
        expect(state.dashboardData).toEqual(data);
    });

    it('should handle setOwnerCourts', () => {
        const courts = [{ id: 1, name: 'Test Court' }];
        const state = ownerReducer(initialState, setOwnerCourts(courts));
        expect(state.courts).toEqual(courts);
    });

    it('should handle setCourtDetail', () => {
        const detail = { id: 1, name: 'Court A', slots: [] };
        const state = ownerReducer(initialState, setCourtDetail(detail));
        expect(state.courtDetail).toEqual(detail);
    });

    it('should handle setSalesData', () => {
        const sales = { stats: [], chartData: [], courtWiseSales: [] };
        const state = ownerReducer(initialState, setSalesData(sales));
        expect(state.salesData).toEqual(sales);
    });

    it('should handle setOwnerProfile', () => {
        const profile = { name: 'Amit', email: 'a@b.com' };
        const state = ownerReducer(initialState, setOwnerProfile(profile));
        expect(state.profileData).toEqual(profile);
    });
});
