import React from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { MapPin, Filter } from 'lucide-react-native';
import { useBooking } from './booking.hooks';
import { createStyles } from './booking.style';
import { AppHeader } from '../../components/AppHeader';
import { SearchBar } from '../../components/SearchBar';
import { FilterChip } from '../../components/FilterChip';
import { CourtListItem } from '../../components/CourtListItem';

export const BookingScreen = () => {
    const {
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
        handleNotifications,
        refetch,
    } = useBooking();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader title="Book a Court" showLogo={false} onNotificationPress={handleNotifications} />
            <View style={styles.content}>
                {/* Search & Location Fixed at Top */}
                <View style={styles.searchSection}>
                    <SearchBar
                        placeholder="Search court name, area..."
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                    />
                </View>

                <View style={styles.locationSection}>
                    <View style={styles.locationLeft}>
                        <MapPin size={20} color={colors.primary} />
                        <Text style={[styles.locationText, { color: colors.text }]}>{location}</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.changeText, { color: colors.primary }]}>Change</Text>
                    </TouchableOpacity>
                </View>

                {/* Filters */}
                <View style={styles.filterSection}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={GAMES}
                        keyExtractor={(item) => item}
                        contentContainerStyle={styles.filterList}
                        renderItem={({ item }) => (
                            <FilterChip
                                label={item}
                                isActive={selectedGame === item.toLowerCase()}
                                onPress={() => handleGameSelect(item)}
                            />
                        )}
                        ListFooterComponent={
                            <TouchableOpacity style={styles.moreFilters}>
                                <Filter size={16} color={colors.text} />
                                <Text style={[styles.moreFiltersText, { color: colors.text }]}>More</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>

            {/* List of Courts */}
            <FlatList
                data={courts}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={[styles.content, { paddingTop: 0 }]}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                }
                ListHeaderComponent={
                    <View style={styles.courtsHeader}>
                        <Text style={[styles.courtsCount, { color: colors.textSecondary }]}>
                            {courts.length} courts found
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <CourtListItem
                        name={item.name}
                        location={item.location}
                        game={item.game}
                        price={item.price}
                        rating={item.rating}
                        available={item.available}
                        image={item.image}
                        onPress={() => handleCourtPress(item.id)}
                    />
                )}
            />
        </SafeAreaView>
    );
};
