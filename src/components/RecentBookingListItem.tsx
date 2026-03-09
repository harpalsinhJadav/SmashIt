import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';

interface RecentBookingListItemProps {
    court: string;
    player: string;
    time: string;
    amount: string;
    playerText: string;
}

export const RecentBookingListItem = ({ court, player, time, amount, playerText }: RecentBookingListItemProps) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.header}>
                <Text style={[styles.court, { color: colors.text }]}>{court}</Text>
                <Text style={[styles.amount, { color: '#059669' }]}>{amount}</Text>
            </View>
            <Text style={[styles.player, { color: colors.textSecondary }]}>{playerText}: {player}</Text>
            <Text style={[styles.time, { color: colors.primary }]}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    court: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        flex: 1,
    },
    amount: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
    },
    player: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        marginBottom: 4,
    },
    time: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
});
