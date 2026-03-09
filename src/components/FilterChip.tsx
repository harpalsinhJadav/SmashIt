import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';
import { moderateScale, horizontalScale, verticalScale } from '../utils/helpers';

interface FilterChipProps {
    label: string;
    isActive: boolean;
    onPress: () => void;
    icon?: React.ReactNode;
}

export const FilterChip = ({ label, isActive, onPress, icon }: FilterChipProps) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    backgroundColor: isActive ? colors.primary : colors.background,
                    borderColor: colors.border,
                },
            ]}
        >
            {icon && <>{icon}</>}
            <Text
                style={[
                    styles.label,
                    {
                        color: isActive ? colors.white : colors.text,
                        marginLeft: icon ? horizontalScale(6) : 0,
                    },
                ]}
            >
                {label}
            </Text>
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
