import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/helpers';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onPress: () => void;
  color: string;
}

export const ActionCard = ({
  title,
  description,
  icon,
  onPress,
  color,
}: ActionCardProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.title, { color: colors.white }]}>{title}</Text>
      <Text style={[styles.description, { color: colors.overlay }]}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    borderRadius: moderateScale(15),
    width: horizontalScale(160),
    height: verticalScale(140),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  description: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
});
