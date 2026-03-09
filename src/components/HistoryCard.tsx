import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Download, ChevronRight } from 'lucide-react-native';
import { useTheme } from '../theme';
import { moderateScale, horizontalScale, verticalScale } from '../utils/helpers';

interface HistoryCardProps {
    court: string;
    game: string;
    date: string;
    time: string;
    amount: string;
    status: 'upcoming' | 'completed' | 'cancelled';
    onPress: () => void;
    onDownloadInvoice?: () => void;
}

export const HistoryCard = ({
    court,
    game,
    date,
    time,
    amount,
    status,
    onPress,
    onDownloadInvoice,
}: HistoryCardProps) => {
    const { colors } = useTheme();

    const getStatusStyle = () => {
        switch (status) {
            case 'completed':
                return { bg: '#ECFDF5', text: '#059669' };
            case 'upcoming':
                return { bg: '#EFF6FF', text: '#2563EB' };
            case 'cancelled':
                return { bg: '#FEF2F2', text: '#DC2626' };
            default:
                return { bg: colors.surface, text: colors.textSecondary };
        }
    };

    const statusStyle = getStatusStyle();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor: colors.background, borderColor: colors.border }]}
        >
            <View style={styles.header}>
                <View style={styles.courtInfo}>
                    <Text style={[styles.courtName, { color: colors.text }]} numberOfLines={1}>{court}</Text>
                    <Text style={[styles.gameName, { color: colors.textSecondary }]}>{game}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
                    <Text style={[styles.statusText, { color: statusStyle.text }]}>{status}</Text>
                </View>
            </View>

            <View style={styles.details}>
                <View style={styles.detailItem}>
                    <Calendar size={14} color={colors.textSecondary} />
                    <Text style={[styles.detailText, { color: colors.textSecondary }]}>{date}</Text>
                </View>
                <Text style={[styles.detailText, { color: colors.textSecondary }]}>{time}</Text>
            </View>

            <View style={[styles.footer, { borderTopColor: colors.border }]}>
                <Text style={[styles.amount, { color: colors.primary }]}>{amount}</Text>
                {status === 'completed' ? (
                    <TouchableOpacity
                        style={[styles.invoiceBtn, { borderColor: colors.primary }]}
                        onPress={(e) => {
                            e.stopPropagation();
                            onDownloadInvoice?.();
                        }}
                    >
                        <Download size={14} color={colors.primary} />
                        <Text style={[styles.invoiceText, { color: colors.primary }]}>Invoice</Text>
                    </TouchableOpacity>
                ) : (
                    <ChevronRight size={20} color={colors.textSecondary} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(16),
        borderRadius: moderateScale(15),
        borderWidth: 1,
        marginBottom: verticalScale(12),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: verticalScale(12),
    },
    courtInfo: {
        flex: 1,
        marginRight: horizontalScale(8),
    },
    courtName: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginBottom: verticalScale(2),
    },
    gameName: {
        fontSize: moderateScale(13),
    },
    statusBadge: {
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(4),
        borderRadius: moderateScale(8),
    },
    statusText: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(16),
        marginBottom: verticalScale(12),
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(6),
    },
    detailText: {
        fontSize: moderateScale(13),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: verticalScale(12),
        borderTopWidth: 1,
    },
    amount: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    invoiceBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(6),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(6),
        borderWidth: 1,
        borderRadius: moderateScale(8),
    },
    invoiceText: {
        fontSize: moderateScale(12),
        fontWeight: '600',
    },
});
