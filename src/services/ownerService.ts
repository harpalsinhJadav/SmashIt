export const ownerService = {
    getDashboardStats: async () => {
        // Mock data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    stats: [
                        { id: 'bookings', label: 'totalBookings', value: '156', change: '+12%', color: 'blue' },
                        { id: 'revenue', label: 'revenue', value: '₹78,400', change: '+18%', color: 'green' },
                        { id: 'players', label: 'activePlayers', value: '89', change: '+5%', color: 'purple' },
                        { id: 'cancellations', label: 'cancellationRate', value: '4.2%', change: '-2%', color: 'orange' },
                    ],
                    recentBookings: [
                        { id: 1, court: 'Court A - Badminton', player: 'Rahul S.', time: 'Today, 6:00 PM', amount: '₹500' },
                        { id: 2, court: 'Court B - Tennis', player: 'Priya M.', time: 'Today, 7:00 PM', amount: '₹800' },
                        { id: 3, court: 'Court A - Badminton', player: 'Amit K.', time: 'Tomorrow, 4:00 PM', amount: '₹500' },
                    ],
                    myCourts: [
                        { id: 1, name: 'Arena Sports Complex', status: 'active', bookings: 45 },
                        { id: 2, name: 'Elite Sports Hub', status: 'active', bookings: 38 },
                        { id: 3, name: 'Victory Court', status: 'under_review', bookings: 0 },
                    ]
                });
            }, 800);
        });
    }
};
