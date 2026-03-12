import playerReducer, {
  setBookingHistory,
  setLocation,
  setNotifications,
  setPopularCourts,
  setUpcomingBookings,
} from '../../../src/redux/slices/playerSlice';

describe('playerSlice', () => {
  const initialState = {
    popularCourts: [],
    upcomingBookings: [],
    bookingHistory: [],
    notifications: [],
    location: 'Mumbai, Maharashtra',
    currentCourt: null,
  };

  it('should return the initial state', () => {
    expect(playerReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setPopularCourts', () => {
    const courts = [
      {
        id: 1,
        name: 'Court A',
        location: 'X',
        game: 'B',
        price: '500',
        rating: 4,
        image: '',
      },
    ];
    const state = playerReducer(initialState, setPopularCourts(courts));
    expect(state.popularCourts).toEqual(courts);
  });

  it('should handle setUpcomingBookings', () => {
    const bookings = [
      { id: 1, court: 'Arena', date: 'Today', game: 'Badminton' },
    ];
    const state = playerReducer(initialState, setUpcomingBookings(bookings));
    expect(state.upcomingBookings).toEqual(bookings);
  });

  it('should handle setBookingHistory', () => {
    const history = [{ id: 1, court: 'Arena' }];
    const state = playerReducer(initialState, setBookingHistory(history));
    expect(state.bookingHistory).toEqual(history);
  });

  it('should handle setLocation', () => {
    const state = playerReducer(initialState, setLocation('Delhi'));
    expect(state.location).toBe('Delhi');
  });

  it('should handle setNotifications', () => {
    const notifs = [{ id: 1, title: 'Test' }];
    const state = playerReducer(initialState, setNotifications(notifs));
    expect(state.notifications).toEqual(notifs);
  });
});
