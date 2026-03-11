import React from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    RefreshControl,
} from 'react-native';
import {
    User,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    LogOut,
    Trash2,
} from 'lucide-react-native';
import { useProfile } from './profile.hooks';
import { createStyles } from './profile.style';
import { AppHeader } from '../../components/AppHeader';
import { ProfileItem } from '../../components/ProfileItem';
import { ProfileActionItem } from '../../components/ProfileActionItem';

export const ProfileScreen = () => {
    const {
        t,
        colors,
        user,
        location,
        isLoading,
        handleLogout,
        handleAction,
        refetch,
    } = useProfile();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader title={t('profile.title')} showLogo={false} showNotifications={false} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />
                }
            >
                {/* Profile Header */}
                <View style={styles.headerCard}>
                    <View style={styles.avatarContainer}>
                        <User size={48} color={colors.primary} />
                    </View>
                    <Text style={[styles.userName, { color: colors.text }]}>
                        {isLoading ? '...' : (user?.name || 'Rahul Sharma')}
                    </Text>
                    <Text style={[styles.userRole, { color: colors.textSecondary }]}>{t('profile.player')}</Text>
                </View>

                {/* Details Section */}
                <View style={styles.section}>
                    <ProfileItem
                        icon={<Mail size={20} color={colors.textSecondary} />}
                        label={t('profile.email')}
                        value={user?.email}
                        isLoading={isLoading}
                    />
                    <ProfileItem
                        icon={<Phone size={20} color={colors.textSecondary} />}
                        label={t('profile.phone')}
                        value={user?.phone}
                        isLoading={isLoading}
                    />
                    <ProfileItem
                        icon={<MapPin size={20} color={colors.textSecondary} />}
                        label={t('profile.preferredLocation')}
                        value={location}
                        showChange={true}
                        onPressChange={() => handleAction('change_location')}
                        changeLabel={t('profile.change')}
                        isLoading={isLoading}
                    />
                </View>

                {/* Actions Section */}
                <View style={styles.section}>
                    <ProfileActionItem
                        icon={<MessageSquare size={20} color={colors.textSecondary} />}
                        label={t('profile.submitComplaint')}
                        onPress={() => handleAction('complaint')}
                    />
                    <ProfileActionItem
                        icon={<LogOut size={20} color={colors.textSecondary} />}
                        label={t('profile.logout')}
                        onPress={handleLogout}
                    />
                    <ProfileActionItem
                        icon={<Trash2 size={20} color={colors.error} />}
                        label={t('profile.deleteAccount')}
                        onPress={() => handleAction('delete')}
                        isDestructive={true}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
