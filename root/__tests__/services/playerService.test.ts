import { playerService } from '../../../src/services/playerService';

describe('playerService', () => {
    it('getDashboardData returns courts and bookings', async () => {
        const data = await playerService.getDashboardData();
        expect(data.popularCourts).toBeDefined();
        expect(data.popularCourts.length).toBe(3);
        expect(data.upcomingBookings).toBeDefined();
    });

    it('getCourts filters by game', async () => {
        const data = await playerService.getCourts({ game: 'badminton' });
        expect(data.every(c => c.game === 'Badminton')).toBe(true);
    });

    it('getCourts returns all with game=all', async () => {
        const data = await playerService.getCourts({ game: 'all' });
        expect(data.length).toBe(5);
    });

    it('getCourtById returns court details', async () => {
        const data = await playerService.getCourtById(1);
        expect(data.id).toBe(1);
        expect(data.timeSlots).toBeDefined();
        expect(data.facilities).toBeDefined();
    });

    it('getBookingHistory returns all bookings', async () => {
        const data = await playerService.getBookingHistory('all');
        expect(data.length).toBe(4);
    });

    it('getBookingHistory filters by status', async () => {
        const data = await playerService.getBookingHistory('completed');
        expect(data.every(b => b.status === 'completed')).toBe(true);
    });

    it('getBookingDetail returns booking data', async () => {
        const data = await playerService.getBookingDetail(1);
        expect(data.id).toBe(1);
        expect(data.bookingId).toBeDefined();
    });

    it('getNotifications returns notification list', async () => {
        const data = await playerService.getNotifications();
        expect(data.length).toBe(4);
    });

    it('getProfile returns player profile', async () => {
        const data = await playerService.getProfile();
        expect(data.name).toBe('Rahul Sharma');
        expect(data.role).toBe('player');
    });
});
