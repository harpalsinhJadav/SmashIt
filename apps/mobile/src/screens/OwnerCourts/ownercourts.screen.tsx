import { LayoutGrid, Plus } from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { OwnerCourtCard } from '../../components/OwnerCourtCard';
import { useOwnerCourtsList } from './ownercourts.hooks';
import { createStyles } from './ownercourts.style';

export const OwnerCourtsScreen = () => {
  const {
    t,
    colors,
    courts,
    isLoading,
    handleNotifications,
    handleAddNewCourt,
    handleManageCourt,
    refetch,
  } = useOwnerCourtsList();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('ownerCourts.title')}
        showBack={false}
        showLogo={false}
        onNotificationPress={handleNotifications}
      />

      <View style={styles.content}>
        {/* Add New Court Button */}
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={handleAddNewCourt}
        >
          <Plus size={20} color={colors.white} />
          <Text style={[styles.addButtonText, { color: colors.white }]}>
            {t('ownerCourts.addNewCourt')}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={courts}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refetch}
              tintColor={colors.primary}
            />
          }
          ListEmptyComponent={
            !isLoading ? (
              <View style={styles.emptyContainer}>
                <LayoutGrid size={48} color={colors.textSecondary} />
                <Text
                  style={[styles.emptyText, { color: colors.textSecondary }]}
                >
                  {t('ownerCourts.noCourts')}
                </Text>
              </View>
            ) : null
          }
          renderItem={({ item }) => (
            <OwnerCourtCard
              name={item.name}
              location={item.location}
              game={item.game}
              status={item.status}
              todayBookings={item.todayBookings}
              revenue={item.revenue}
              image={item.image}
              onManage={() => handleManageCourt(item.id)}
              t={t}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
