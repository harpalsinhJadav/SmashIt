import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../theme';

interface OwnerCourtListItemProps {
  name: string;
  status: string;
  bookings: number;
  bookingsText: string;
  onPress: () => void;
}

export const OwnerCourtListItem = ({
  name,
  status,
  bookings,
  bookingsText,
  onPress,
}: OwnerCourtListItemProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const isActive = status === 'active';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View>
          <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
          <Text style={[styles.bookings, { color: colors.textSecondary }]}>
            {bookings} {bookingsText}
          </Text>
        </View>
        <View
          style={[
            styles.badge,
            { backgroundColor: isActive ? colors.successBg : colors.warningBg },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              { color: isActive ? colors.successText : colors.warningText },
            ]}
          >
            {t(
              `ownerCourtManagement.status${
                status.charAt(0).toUpperCase() +
                status.slice(1).replace('_', '')
              }`,
            )}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  bookings: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
});
