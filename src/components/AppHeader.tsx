import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import { useTheme } from '../theme';
import { Logo } from './Logo';
import { moderateScale, verticalScale, horizontalScale } from '../utils/helpers';

interface AppHeaderProps {
    title?: string;
    showLogo?: boolean;
    showNotifications?: boolean;
    onNotificationPress?: () => void;
}

export const AppHeader = ({
    title,
    showLogo = true,
    showNotifications = true,
    onNotificationPress,
}: AppHeaderProps) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
            <View style={styles.leftSection}>
                {showLogo ? (
                    <Logo size="sm" showText={true} />
                ) : (
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                )}
            </View>
            <View style={styles.rightSection}>
                {showNotifications && (
                    <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
                        <Bell size={24} color={colors.text} />
                        <View style={[styles.badge, { backgroundColor: colors.primary, borderColor: colors.white }]} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: verticalScale(60),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(16),
        borderBottomWidth: 1,
    },
    leftSection: {
        flex: 1,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(20),
        fontWeight: 'bold',
    },
    iconButton: {
        padding: moderateScale(8),
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: moderateScale(8),
        right: moderateScale(8),
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(5),
        borderWidth: 2,
    },
});
