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
    },

    getMyCourts: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: 'Arena Sports Complex',
                        location: 'Downtown, Mumbai',
                        game: 'Badminton',
                        status: 'active',
                        todayBookings: 8,
                        revenue: '₹4,000',
                        image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400'
                    },
                    {
                        id: 2,
                        name: 'Elite Sports Hub',
                        location: 'North Zone, Mumbai',
                        game: 'Tennis',
                        status: 'active',
                        todayBookings: 6,
                        revenue: '₹4,800',
                        image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400'
                    },
                    {
                        id: 3,
                        name: 'Victory Court',
                        location: 'East Side, Mumbai',
                        game: 'Squash',
                        status: 'under_review',
                        todayBookings: 0,
                        revenue: '₹0',
                        image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400'
                    },
                ]);
            }, 600);
        });
    },

    getOwnerCourtDetail: async (id: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    name: 'Arena Sports Complex',
                    game: 'Badminton',
                    status: 'active',
                    slots: [
                        { id: 1, time: '6:00 AM - 7:00 AM', price: '₹400', status: 'available' },
                        { id: 2, time: '7:00 AM - 8:00 AM', price: '₹500', status: 'booked' },
                        { id: 3, time: '8:00 AM - 9:00 AM', price: '₹500', status: 'maintenance' },
                        { id: 4, time: '4:00 PM - 5:00 PM', price: '₹600', status: 'available' },
                        { id: 5, time: '5:00 PM - 6:00 PM', price: '₹600', status: 'booked' },
                        { id: 6, time: '6:00 PM - 7:00 PM', price: '₹700', status: 'booked' },
                    ],
                    assistants: [
                        { id: 1, name: 'Suresh Kumar', email: 'suresh@example.com', assignedCourts: 'All Courts' },
                        { id: 2, name: 'Anjali Patel', email: 'anjali@example.com', assignedCourts: 'This Court' },
                    ]
                });
            }, 600);
        });
    },

    getOwnerSales: async (filter: string) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    stats: [
                        { label: 'totalRevenue', value: '₹2,45,600', color: '#16a34a' },
                        { label: 'totalBookings', value: '412', color: '#2563eb' },
                        { label: 'activePlayers', value: '156', color: '#9333ea' },
                        { label: 'avgBookingValue', value: '₹596', color: '#ea580c' },
                    ],
                    chartData: [
                        { name: 'Mon', revenue: 12000 },
                        { name: 'Tue', revenue: 15000 },
                        { name: 'Wed', revenue: 18000 },
                        { name: 'Thu', revenue: 14000 },
                        { name: 'Fri', revenue: 22000 },
                        { name: 'Sat', revenue: 28000 },
                        { name: 'Sun', revenue: 25000 },
                    ],
                    courtWiseSales: [
                        { court: 'Arena Sports Complex', bookings: 156, revenue: '₹78,400' },
                        { court: 'Elite Sports Hub', bookings: 128, revenue: '₹102,400' },
                        { court: 'Victory Court', bookings: 92, revenue: '₹55,200' },
                    ]
                });
            }, 600);
        });
    }
};
