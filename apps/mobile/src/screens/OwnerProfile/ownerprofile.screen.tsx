import { LogOut, Mail, MapPin, Phone, User } from 'lucide-react-native';
import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { useOwnerProfileScreen } from './ownerprofile.hooks';
import { createStyles } from './ownerprofile.style';

export const OwnerProfileScreen = () => {
  const {
    t,
    colors,
    profileData,
    isLoading,
    handleNotifications,
    handleLogout,
    handleEditLocation,
    handleDeleteAccount,
    refetch,
  } = useOwnerProfileScreen();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('ownerProfile.title')}
        showBack={false}
        showLogo={false}
        onNotificationPress={handleNotifications}
      />

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
          {/* Profile Header */}
          <View style={styles.headerCard}>
            <View style={styles.avatarContainer}>
              <User size={48} color={colors.primary} />
            </View>
            <Text style={styles.nameText}>{profileData?.name || ''}</Text>
            <Text style={styles.roleText}>{t('ownerProfile.role')}</Text>
          </View>

          {/* Profile Details */}
          <View style={styles.detailsCard}>
            <View style={styles.detailRow}>
              <Mail size={20} color={colors.textSecondary} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>
                  {t('ownerProfile.email')}
                </Text>
                <Text style={styles.detailValue}>
                  {profileData?.email || ''}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <Phone size={20} color={colors.textSecondary} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>
                  {t('ownerProfile.phone')}
                </Text>
                <Text style={styles.detailValue}>
                  {profileData?.phone || ''}
                </Text>
              </View>
            </View>

            <View style={[styles.detailRow, styles.noBorder]}>
              <MapPin size={20} color={colors.textSecondary} />
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>
                  {t('ownerProfile.businessLocation')}
                </Text>
                <Text style={styles.detailValue}>
                  {profileData?.location || ''}
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleEditLocation}
                style={styles.padding4}
              >
                <Text style={styles.editButtonText}>
                  {t('ownerProfile.edit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>
              {t('ownerProfile.businessStats')}
            </Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>
                  {profileData?.stats?.courts || 0}
                </Text>
                <Text style={styles.statItemLabel}>
                  {t('ownerProfile.courts')}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>
                  {profileData?.stats?.assistants || 0}
                </Text>
                <Text style={styles.statItemLabel}>
                  {t('ownerProfile.assistants')}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>
                  {profileData?.stats?.bookings || 0}
                </Text>
                <Text style={styles.statItemLabel}>
                  {t('ownerProfile.bookings')}
                </Text>
              </View>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionsCard}>
            <TouchableOpacity
              style={[styles.actionRow, styles.actionRowBorder]}
              onPress={handleLogout}
            >
              <LogOut size={20} color={colors.textSecondary} />
              <Text style={styles.logoutText}>{t('ownerProfile.logout')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionRow}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.deleteText}>
                {t('ownerProfile.deleteAccount')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
