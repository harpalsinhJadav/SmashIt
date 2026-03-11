import React from 'react';
import {
    View,
    FlatList,
    RefreshControl,
    SafeAreaView,
    Text,
} from 'react-native';
import { useNotificationsHook } from './notifications.hooks';
import { createStyles } from './notifications.style';
import { AppHeader } from '../../components/AppHeader';
import { NotificationCard } from '../../components/NotificationCard';
import { BellOff } from 'lucide-react-native';

export const NotificationsScreen = () => {
    const {
        colors,
        t,
        notifications,
        isLoading,
        handleBack,
        handleNotificationPress,
        refetch,
    } = useNotificationsHook();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader title={t('notifications.title')} showBack={true} onBackPress={handleBack} showNotifications={false} />

            <View style={[styles.content, { flex: 1 }]}>
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                    }
                    ListEmptyComponent={
                        !isLoading ? (
                            <View style={styles.emptyContainer}>
                                <BellOff size={48} color={colors.textSecondary} />
                                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                                    {t('notifications.noNotifications')}
                                </Text>
                            </View>
                        ) : null
                    }
                    renderItem={({ item }) => (
                        <NotificationCard
                            title={item.title}
                            message={item.message}
                            time={item.time}
                            read={item.read}
                            type={item.type as any}
                            onPress={() => handleNotificationPress(item.id)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
