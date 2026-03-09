import React from 'react';
import { View, Text, ScrollView, RefreshControl, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Calendar, DollarSign, Users, TrendingUp, Plus } from 'lucide-react-native';
import { useOwnerDashboard } from './ownerdashboard.hooks';
import { createStyles } from './ownerdashboard.style';
import { AppHeader } from '../../components/AppHeader';
import { ActionCard } from '../../components/ActionCard';
import { OwnerStatCard } from '../../components/OwnerStatCard';
import { OwnerCourtListItem } from '../../components/OwnerCourtListItem';
import { RecentBookingListItem } from '../../components/RecentBookingListItem';

export const OwnerDashboardScreen = () => {
    const {
        t,
        colors,
        isLoading,
        data,
        handleNotifications,
        handleAddNewCourt,
        handleViewSales,
        handleViewAllCourts,
        handleCourtPress,
        refetch,
    } = useOwnerDashboard();

    const styles = createStyles(colors);

    const getIcon = (id: string, color: string) => {
        if (id === 'bookings') return <Calendar size={20} color={color} />;
        if (id === 'revenue') return <DollarSign size={20} color={color} />;
        if (id === 'players') return <Users size={20} color={color} />;
        if (id === 'cancellations') return <TrendingUp size={20} color={color} />;
        return <Calendar size={20} color={color} />;
    };

    const getHexColor = (colorName: string) => {
        if (colorName === 'blue') return '#3B82F6';
        if (colorName === 'green') return '#10B981';
        if (colorName === 'purple') return '#8B5CF6';
        if (colorName === 'orange') return '#F59E0B';
        return colors.primary;
    };

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader onNotificationPress={handleNotifications} />

            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                }
            >
                <View style={styles.content}>
                    {/* Quick Actions */}
                    <View style={styles.quickActions}>
                        <ActionCard
                            title={t('ownerDashboard.addNewCourt')}
                            description={t('ownerDashboard.addNewCourtDesc')}
                            color="#3B82F6"
                            icon={<Plus size={32} color={colors.white} />}
                            onPress={handleAddNewCourt}
                        />
                        <ActionCard
                            title={t('ownerDashboard.viewSales')}
                            description={t('ownerDashboard.viewSalesDesc')}
                            color="#10B981"
                            icon={<DollarSign size={32} color={colors.white} />}
                            onPress={handleViewSales}
                        />
                    </View>

                    {isLoading && !data ? (
                        <View style={{ padding: 40, alignItems: 'center' }}>
                            <ActivityIndicator size="large" color={colors.primary} />
                        </View>
                    ) : (
                        <>
                            {/* Stats Grid */}
                            <View style={styles.statsGrid}>
                                {data?.stats.map((stat: any) => {
                                    const hexColor = getHexColor(stat.color);
                                    return (
                                        <OwnerStatCard
                                            key={stat.id}
                                            label={t(`ownerDashboard.stats.${stat.label}`)}
                                            value={stat.value}
                                            change={stat.change}
                                            icon={getIcon(stat.id, hexColor)}
                                            color={hexColor}
                                        />
                                    );
                                })}
                            </View>

                            {/* My Courts */}
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                        {t('ownerDashboard.myCourts')}
                                    </Text>
                                    <TouchableOpacity onPress={handleViewAllCourts}>
                                        <Text style={[styles.viewAll, { color: colors.primary }]}>
                                            {t('ownerDashboard.viewAll')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {data?.myCourts.map((court: any) => (
                                    <OwnerCourtListItem
                                        key={court.id}
                                        name={court.name}
                                        status={court.status}
                                        bookings={court.bookings}
                                        bookingsText={t('ownerDashboard.bookingsThisMonth')}
                                        onPress={() => handleCourtPress(court.id)}
                                    />
                                ))}
                            </View>

                            {/* Recent Bookings */}
                            <View style={styles.section}>
                                <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: 12 }]}>
                                    {t('ownerDashboard.recentBookings')}
                                </Text>

                                {data?.recentBookings.map((booking: any) => (
                                    <RecentBookingListItem
                                        key={booking.id}
                                        court={booking.court}
                                        player={booking.player}
                                        time={booking.time}
                                        amount={booking.amount}
                                        playerText={t('ownerDashboard.player')}
                                    />
                                ))}
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
