import apiClient from './apiClient';

export const playerService = {
    getDashboardData: async () => {
        // Mocking API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            popularCourts: [
                { id: 1, name: 'Arena Sports Complex', location: 'Downtown', game: 'Badminton', price: '₹500/hr', rating: 4.8, image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400' },
                { id: 2, name: 'Elite Sports Hub', location: 'North Zone', game: 'Tennis', price: '₹800/hr', rating: 4.9, image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400' },
                { id: 3, name: 'Victory Court', location: 'East Side', game: 'Squash', price: '₹600/hr', rating: 4.7, image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=400' },
            ],
            upcomingBookings: [
                { id: 1, court: 'Arena Sports Complex', date: 'Today, 6:00 PM', game: 'Badminton' },
                { id: 2, court: 'Victory Court', date: 'Tomorrow, 4:00 PM', game: 'Squash' },
            ],
        };
    },
};
