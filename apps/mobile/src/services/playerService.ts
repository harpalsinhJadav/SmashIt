export const playerService = {
  getDashboardData: async () => {
    // Mocking API delay
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    return {
      popularCourts: [
        {
          id: 1,
          name: 'Arena Sports Complex',
          location: 'Downtown',
          game: 'Badminton',
          price: '₹500/hr',
          rating: 4.8,
          image:
            'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
        },
        {
          id: 2,
          name: 'Elite Sports Hub',
          location: 'North Zone',
          game: 'Tennis',
          price: '₹800/hr',
          rating: 4.9,
          image:
            'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
        },
        {
          id: 3,
          name: 'Victory Court',
          location: 'East Side',
          game: 'Squash',
          price: '₹600/hr',
          rating: 4.7,
          image:
            'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400',
        },
      ],
      upcomingBookings: [
        {
          id: 1,
          court: 'Arena Sports Complex',
          date: 'Today, 6:00 PM',
          game: 'Badminton',
        },
        {
          id: 2,
          court: 'Victory Court',
          date: 'Tomorrow, 4:00 PM',
          game: 'Squash',
        },
      ],
    };
  },
  getCourts: async (params: { game?: string; search?: string }) => {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    const courts = [
      {
        id: 1,
        name: 'Arena Sports Complex',
        location: 'Downtown',
        game: 'Badminton',
        price: '₹500/hr',
        rating: 4.8,
        available: true,
        image:
          'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
      },
      {
        id: 2,
        name: 'Elite Sports Hub',
        location: 'North Zone',
        game: 'Tennis',
        price: '₹800/hr',
        rating: 4.9,
        available: true,
        image:
          'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
      },
      {
        id: 3,
        name: 'Victory Court',
        location: 'East Side',
        game: 'Squash',
        price: '₹600/hr',
        rating: 4.7,
        available: false,
        image:
          'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400',
      },
      {
        id: 4,
        name: 'Champions Arena',
        location: 'West End',
        game: 'Basketball',
        price: '₹1000/hr',
        rating: 4.6,
        available: true,
        image:
          'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
      },
      {
        id: 5,
        name: 'Pro Court Sports',
        location: 'Central',
        game: 'Badminton',
        price: '₹450/hr',
        rating: 4.5,
        available: true,
        image:
          'https://images.unsplash.com/photo-1593786481097-d0b2b3e90c90?w=400',
      },
    ];

    return courts.filter(c => {
      const matchGame =
        !params.game ||
        params.game === 'all' ||
        c.game.toLowerCase() === params.game.toLowerCase();
      const matchSearch =
        !params.search ||
        c.name.toLowerCase().includes(params.search.toLowerCase()) ||
        c.location.toLowerCase().includes(params.search.toLowerCase());
      return matchGame && matchSearch;
    });
  },
  getCourtById: async (id: number) => {
    await new Promise<void>(resolve => setTimeout(resolve, 800));
    return {
      id,
      name: 'Arena Sports Complex',
      location: 'Downtown, Mumbai',
      game: 'Badminton',
      rating: 4.8,
      reviews: 142,
      price: '₹500/hr',
      image:
        'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
      facilities: [
        'Parking',
        'Changing Room',
        'Refreshments',
        'Equipment Rental',
      ],
      inclusions: ['Court Access', 'Basic Equipment', 'Lighting'],
      exclusions: ['Professional Coaching', 'Tournament Booking'],
      timeSlots: [
        { time: '6:00 AM - 7:00 AM', available: true, popular: false },
        { time: '7:00 AM - 8:00 AM', available: true, popular: true },
        { time: '8:00 AM - 9:00 AM', available: false, popular: false },
        { time: '9:00 AM - 10:00 AM', available: true, popular: false },
        { time: '4:00 PM - 5:00 PM', available: true, popular: true },
        { time: '5:00 PM - 6:00 PM', available: true, popular: true },
        { time: '6:00 PM - 7:00 PM', available: false, popular: true },
        { time: '7:00 PM - 8:00 PM', available: true, popular: false },
      ],
    };
  },
  getBookingHistory: async (filter: string = 'all') => {
    await new Promise<void>(resolve => setTimeout(resolve, 800));
    const bookings = [
      {
        id: 1,
        court: 'Arena Sports Complex',
        game: 'Badminton',
        date: '2026-03-09',
        time: '6:00 PM - 7:00 PM',
        amount: '₹500',
        status: 'completed',
      },
      {
        id: 2,
        court: 'Elite Sports Hub',
        game: 'Tennis',
        date: '2026-03-05',
        time: '4:00 PM - 5:00 PM',
        amount: '₹800',
        status: 'completed',
      },
      {
        id: 3,
        court: 'Victory Court',
        game: 'Squash',
        date: '2026-03-10',
        time: '5:00 PM - 6:00 PM',
        amount: '₹600',
        status: 'upcoming',
      },
      {
        id: 4,
        court: 'Champions Arena',
        game: 'Basketball',
        date: '2026-02-28',
        time: '7:00 PM - 8:00 PM',
        amount: '₹1000',
        status: 'cancelled',
      },
    ];

    return filter === 'all'
      ? bookings
      : bookings.filter(b => b.status === filter);
  },
  getBookingDetail: async (id: number) => {
    await new Promise<void>(resolve => setTimeout(resolve, 800));
    return {
      id,
      courtName: 'Arena Sports Complex',
      location: 'Downtown, Mumbai',
      game: 'Badminton',
      date: 'Monday, 09 March 2026',
      time: '6:00 PM - 7:00 PM',
      amount: '₹500',
      status: 'completed',
      bookingId: 'SM-BK-2026-001',
      paymentMethod: 'UPI - Google Pay',
      transactionId: 'TXN1234567890',
      courtId: 1,
    };
  },
  getNotifications: async () => {
    await new Promise<void>(resolve => setTimeout(resolve, 800));
    return [
      {
        id: 1,
        type: 'booking',
        title: 'Booking Confirmed',
        message:
          'Your booking at Arena Sports Complex is confirmed for 6:00 PM',
        time: '2 hours ago',
        read: false,
      },
      {
        id: 2,
        type: 'offer',
        title: 'Special Offer!',
        message: 'Get 20% off on your next booking. Use code SAVE20',
        time: '5 hours ago',
        read: false,
      },
      {
        id: 3,
        type: 'booking',
        title: 'Booking Reminder',
        message: 'You have a booking tomorrow at 4:00 PM',
        time: '1 day ago',
        read: true,
      },
      {
        id: 4,
        type: 'offer',
        title: 'Cashback Available',
        message: '₹100 cashback credited to your wallet',
        time: '2 days ago',
        read: true,
      },
    ];
  },
  getProfile: async () => {
    await new Promise<void>(resolve => setTimeout(resolve, 800));
    return {
      id: '1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210',
      role: 'player',
      avatar: '',
    };
  },
};
