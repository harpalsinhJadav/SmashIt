import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme';
import { moderateScale, horizontalScale, verticalScale } from '../utils/helpers';

interface ProfileItemProps {
    icon: React.ReactNode;
    label: string;
    value: string | undefined;
    showChange?: boolean;
    onPressChange?: () => void;
    isLoading?: boolean;
    changeLabel?: string;
}

export const ProfileItem = ({
    icon,
    label,
    value,
    showChange = false,
    onPressChange,
    isLoading = false,
    changeLabel = 'Change',
}: ProfileItemProps) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.item, { borderBottomColor: colors.border }]}>
            <View style={styles.itemIcon}>{icon}</View>
            <View style={styles.itemContent}>
                <Text style={[styles.itemLabel, { color: colors.textSecondary }]}>{label}</Text>
                <Text style={[styles.itemValue, { color: colors.text }]}>
                    {isLoading ? <ActivityIndicator size="small" color={colors.primary} /> : value || 'N/A'}
                </Text>
            </View>
            {showChange && !isLoading && (
                <TouchableOpacity onPress={onPressChange}>
                    <Text style={[styles.changeText, { color: colors.primary }]}>{changeLabel}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(16),
        borderBottomWidth: 1,
    },
    itemIcon: {
        marginRight: horizontalScale(16),
    },
    itemContent: {
        flex: 1,
    },
    itemLabel: {
        fontSize: moderateScale(12),
        marginBottom: verticalScale(2),
    },
    itemValue: {
        fontSize: moderateScale(15),
        fontWeight: '500',
    },
    changeText: {
        fontSize: moderateScale(13),
        fontWeight: '600',
    },
});
