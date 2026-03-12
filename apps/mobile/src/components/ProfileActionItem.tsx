import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '../theme';
import { horizontalScale, moderateScale } from '../utils/helpers';

interface ProfileActionItemProps {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  isDestructive?: boolean;
}

export const ProfileActionItem = ({
  icon,
  label,
  onPress,
  isDestructive = false,
}: ProfileActionItemProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.actionItem, { borderBottomColor: colors.border }]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[
          styles.actionText,
          { color: isDestructive ? colors.error : colors.text },
        ]}
      >
        {label}
      </Text>
      {!isDestructive && (
        <ChevronRight size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(16),
    borderBottomWidth: 1,
  },
  actionText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    flex: 1,
    marginLeft: horizontalScale(16),
  },
});
