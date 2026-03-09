import { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme';
import { useCourts } from '../../services/playerQueries';
import { useAppSelector } from '../../redux/store';

export const useBooking = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [selectedGame, setSelectedGame] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const location = useAppSelector((state) => state.player.location);

    const GAMES = useMemo(() => ['All', 'Badminton', 'Tennis', 'Squash', 'Basketball'], []);

    const { data: courts = [], isLoading, refetch } = useCourts({
        game: selectedGame,
        search: searchQuery
    });

    const handleSearchChange = useCallback((text: string) => {
        setSearchQuery(text);
    }, []);

    const handleGameSelect = useCallback((game: string) => {
        setSelectedGame(game.toLowerCase());
    }, []);

    const handleCourtPress = useCallback((id: number) => {
        console.log('Court pressed for booking:', id);
    }, []);

    return {
        t,
        colors,
        selectedGame,
        searchQuery,
        location,
        GAMES,
        courts,
        isLoading,
        handleSearchChange,
        handleGameSelect,
        handleCourtPress,
        refetch,
    };
};
