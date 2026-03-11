import React from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { MapPin, Calendar, TrendingUp } from 'lucide-react-native';
import { useHome } from './home.hooks';
import { createStyles } from './home.style';
import { AppHeader } from '../../components/AppHeader';
import { SearchBar } from '../../components/SearchBar';
import { ActionCard } from '../../components/ActionCard';
import { BookingCard } from '../../components/BookingCard';
import { CourtCard } from '../../components/CourtCard';

export const HomeScreen = () => {
    const {
        t,
        colors,
        isLoading,
        popularCourts,
        upcomingBookings,
        location,
        handleCourtPress,
        handleBookingPress,
        handleMyBookings,
        handleViewAllCourts,
        handleBookACourt,
        handleNotifications,
        refetch,
    } = useHome();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.surface }]}>
            <AppHeader onNotificationPress={handleNotifications} />
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                }
            >
                <View style={styles.content}>
                    {/* Location & Search */}
                    <View style={styles.locationContainer}>
                        <MapPin size={18} color={colors.primary} />
                        <Text style={[styles.locationText, { color: colors.text }]}>{location}</Text>
                        <TouchableOpacity>
                            <Text style={[styles.changeText, { color: colors.primary }]}>{t('home.change')}</Text>
                        </TouchableOpacity>
                    </View>

                    <SearchBar
                        placeholder={t('home.searchPlaceholder')}
                        onPress={() => console.log('Search pressed')}
                        editable={false}
                    />

                    {/* Quick Actions */}
                    <View style={styles.quickActions}>
                        <ActionCard
                            title={t('home.bookACourt')}
                            description={t('home.bookACourtDesc')}
                            color={colors.primary}
                            icon={<Calendar size={32} color={colors.white} />}
                            onPress={handleBookACourt}
                        />
                        <ActionCard
                            title={t('home.myBookings')}
                            description={t('home.myBookingsDesc')}
                            color={colors.accent}
                            icon={<TrendingUp size={32} color={colors.white} />}
                            onPress={handleMyBookings}
                        />
                    </View>

                    {/* Upcoming Bookings */}
                    {upcomingBookings.length > 0 && (
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('home.upcomingBookings')}</Text>
                            </View>
                            {upcomingBookings.map((booking) => (
                                <BookingCard
                                    key={booking.id}
                                    court={booking.court}
                                    game={booking.game}
                                    date={booking.date}
                                    onPress={() => handleBookingPress(booking.id)}
                                />
                            ))}
                        </View>
                    )}

                    {/* Popular Courts */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('home.popularCourts')}</Text>
                            <TouchableOpacity onPress={handleViewAllCourts}>
                                <Text style={[styles.viewAll, { color: colors.primary }]}>{t('home.viewAll')}</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={popularCourts}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <CourtCard
                                    name={item.name}
                                    game={item.game}
                                    location={item.location}
                                    price={item.price}
                                    image={item.image}
                                    onPress={() => handleCourtPress(item.id)}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
