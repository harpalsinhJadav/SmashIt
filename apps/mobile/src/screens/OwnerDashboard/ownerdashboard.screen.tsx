import {
  Calendar,
  DollarSign,
  Plus,
  TrendingUp,
  Users,
} from 'lucide-react-native';
import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ActionCard } from '../../components/ActionCard';
import { AppHeader } from '../../components/AppHeader';
import { OwnerCourtListItem } from '../../components/OwnerCourtListItem';
import { OwnerStatCard } from '../../components/OwnerStatCard';
import { RecentBookingListItem } from '../../components/RecentBookingListItem';
import { useOwnerDashboard } from './ownerdashboard.hooks';
import { createStyles } from './ownerdashboard.style';

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
    if (colorName === 'blue') return colors.statBlue;
    if (colorName === 'green') return colors.statGreen;
    if (colorName === 'purple') return colors.statPurple;
    if (colorName === 'orange') return colors.statOrange;
    return colors.primary;
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader onNotificationPress={handleNotifications} />

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      >
        <View style={styles.content}>
          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <ActionCard
              title={t('ownerDashboard.addNewCourt')}
              description={t('ownerDashboard.addNewCourtDesc')}
              color={colors.statBlue}
              icon={<Plus size={32} color={colors.white} />}
              onPress={handleAddNewCourt}
            />
            <ActionCard
              title={t('ownerDashboard.viewSales')}
              description={t('ownerDashboard.viewSalesDesc')}
              color={colors.statGreen}
              icon={<DollarSign size={32} color={colors.white} />}
              onPress={handleViewSales}
            />
          </View>

          {isLoading && !data ? (
            <View style={styles.loadingContainer}>
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
                  <Text style={styles.sectionTitleText}>
                    {t('ownerDashboard.myCourts')}
                  </Text>
                  <TouchableOpacity onPress={handleViewAllCourts}>
                    <Text style={styles.viewAll}>
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
                <Text style={[styles.sectionTitleText, styles.mb12]}>
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
