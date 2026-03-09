import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Tag, CheckCircle } from 'lucide-react-native';
import { useTheme } from '../theme';
import { moderateScale, horizontalScale, verticalScale } from '../utils/helpers';

interface NotificationCardProps {
    title: string;
    message: string;
    time: string;
    read: boolean;
    type: 'booking' | 'offer' | 'other';
    onPress?: () => void;
}

export const NotificationCard = ({
    title,
    message,
    time,
    read,
    type,
    onPress,
}: NotificationCardProps) => {
    const { colors } = useTheme();

    const getIcon = () => {
        switch (type) {
            case 'booking':
                return { icon: <Calendar size={20} color="#2563EB" />, bg: '#EFF6FF' };
            case 'offer':
                return { icon: <Tag size={20} color="#EA580C" />, bg: '#FFF7ED' };
            default:
                return { icon: <CheckCircle size={20} color="#059669" />, bg: '#F0FDF4' };
        }
    };

    const { icon, bg } = getIcon();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                    shadowColor: '#000',
                    shadowOpacity: read ? 0 : 0.05,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                    elevation: read ? 0 : 2,
                },
            ]}
        >
            <View style={styles.content}>
                <View style={[styles.iconContainer, { backgroundColor: bg }]}>
                    {icon}
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: colors.text, fontWeight: read ? '500' : 'bold' }]}>
                            {title}
                        </Text>
                        {!read && <View style={[styles.unreadDot, { backgroundColor: colors.primary }]} />}
                    </View>
                    <Text style={[styles.message, { color: colors.textSecondary }]}>{message}</Text>
                    <Text style={[styles.time, { color: colors.textTertiary || '#94A3B8' }]}>{time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(16),
        borderRadius: moderateScale(15),
        borderWidth: 1,
        marginBottom: verticalScale(10),
    },
    content: {
        flexDirection: 'row',
        gap: horizontalScale(12),
    },
    iconContainer: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(2),
    },
    title: {
        fontSize: moderateScale(15),
    },
    unreadDot: {
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: moderateScale(4),
    },
    message: {
        fontSize: moderateScale(13),
        marginBottom: verticalScale(4),
        lineHeight: moderateScale(18),
    },
    time: {
        fontSize: moderateScale(11),
    },
});
