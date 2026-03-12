import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../theme';

interface OwnerStatCardProps {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

export const OwnerStatCard = ({
  label,
  value,
  change,
  icon,
  color,
}: OwnerStatCardProps) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const isPositive = change.startsWith('+');

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
        {icon}
      </View>
      <Text style={[styles.label, { color: colors.textSecondary }]}>
        {label}
      </Text>
      <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
      <Text
        style={[
          styles.change,
          { color: isPositive ? colors.success : colors.error },
        ]}
      >
        {change} {t('ownerDashboard.stats.fromLastMonth')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    marginHorizontal: 6,
    minWidth: '45%',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 6,
  },
  change: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
});
