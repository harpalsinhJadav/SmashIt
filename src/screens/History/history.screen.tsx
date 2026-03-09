import React from 'react';
import {
    View,
    FlatList,
    RefreshControl,
    SafeAreaView,
    Text,
} from 'react-native';
import { useHistory } from './history.hooks';
import { createStyles } from './history.style';
import { AppHeader } from '../../components/AppHeader';
import { FilterChip } from '../../components/FilterChip';
import { HistoryCard } from '../../components/HistoryCard';
import { Calendar } from 'lucide-react-native';

export const HistoryScreen = () => {
    const {
        colors,
        t,
        filter,
        FILTERS,
        bookings,
        isLoading,
        handleBookingPress,
        handleDownloadInvoice,
        handleFilterChange,
        handleNotifications,
        refetch,
    } = useHistory();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader title={t('history.title')} showBack={false} showLogo={false} onNotificationPress={handleNotifications} />

            <View style={[styles.content, { flex: 1 }]}>
                <View style={styles.filterContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={FILTERS}
                        keyExtractor={(item) => item}
                        contentContainerStyle={styles.filterList}
                        renderItem={({ item }) => (
                            <FilterChip
                                label={t(`history.${item}`)}
                                isActive={filter === item}
                                onPress={() => handleFilterChange(item)}
                            />
                        )}
                    />
                </View>

                <FlatList
                    data={bookings}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                    }
                    ListEmptyComponent={
                        !isLoading ? (
                            <View style={styles.emptyContainer}>
                                <Calendar size={48} color={colors.textSecondary} />
                                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                                    {t('history.noBookings')}
                                </Text>
                            </View>
                        ) : null
                    }
                    renderItem={({ item }) => (
                        <HistoryCard
                            court={item.court}
                            game={item.game}
                            date={item.date}
                            time={item.time}
                            amount={item.amount}
                            status={item.status as any}
                            onPress={() => handleBookingPress(item.id)}
                            onDownloadInvoice={() => handleDownloadInvoice(item.id)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
