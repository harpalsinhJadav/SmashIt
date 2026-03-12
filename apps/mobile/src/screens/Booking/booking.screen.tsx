import { Filter, MapPin } from 'lucide-react-native';
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
import { CourtListItem } from '../../components/CourtListItem';
import { FilterChip } from '../../components/FilterChip';
import { SearchBar } from '../../components/SearchBar';
import { useBooking } from './booking.hooks';
import { createStyles } from './booking.style';

export const BookingScreen = () => {
  const {
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
    handleNotifications,
    refetch,
  } = useBooking();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('booking.title')}
        showLogo={false}
        onNotificationPress={handleNotifications}
      />
      <View style={styles.content}>
        {/* Search & Location Fixed at Top */}
        <View style={styles.searchSection}>
          <SearchBar
            placeholder={t('booking.searchPlaceholder')}
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>

        <View style={styles.locationSection}>
          <View style={styles.locationLeft}>
            <MapPin size={20} color={colors.primary} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeText}>{t('booking.change')}</Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View style={styles.filterSection}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={GAMES}
            keyExtractor={item => item}
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
                <Text style={styles.moreFiltersText}>{t('booking.more')}</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>

      {/* List of Courts */}
      <FlatList
        data={courts}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentNoPadding}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
        ListHeaderComponent={
          <View style={styles.courtsHeader}>
            <Text style={styles.courtsCount}>
              {t('booking.courtsFound', { count: courts.length })}
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
