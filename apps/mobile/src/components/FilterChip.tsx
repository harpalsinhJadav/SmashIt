import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/helpers';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
}

export const FilterChip = ({
  label,
  isActive,
  onPress,
  icon,
}: FilterChipProps) => {
  const { colors } = useTheme();

  const containerStyle = {
    backgroundColor: isActive ? colors.primary : colors.background,
    borderColor: colors.border,
  };

  const labelStyle = {
    color: isActive ? colors.white : colors.text,
    marginLeft: icon ? horizontalScale(6) : 0,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {icon && <>{icon}</>}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(8),
  },
  label: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
});
