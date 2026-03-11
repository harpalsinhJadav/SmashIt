import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MapPin, Edit } from 'lucide-react-native';
import { useTheme } from '../theme';

interface OwnerCourtCardProps {
    name: string;
    location: string;
    game: string;
    status: string;
    todayBookings: number;
    revenue: string;
    image: string;
    onManage?: () => void;
    t: any;
}

export const OwnerCourtCard = ({
    name,
    location,
    game,
    status,
    todayBookings,
    revenue,
    image,
    onManage,
    t
}: OwnerCourtCardProps) => {
    const { colors } = useTheme();

    const getStatusColor = () => {
        if (status === 'active') return { bg: '#ECFDF5', text: '#065F46' };
        if (status === 'under_review') return { bg: '#FEF3C7', text: '#92400E' };
        return { bg: '#FEF2F2', text: '#991B1B' };
    };

    const statusColors = getStatusColor();

    return (
        <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
                        <View style={styles.locationRow}>
                            <MapPin size={14} color={colors.textSecondary} />
                            <Text style={[styles.location, { color: colors.textSecondary }]}>{location}</Text>
                        </View>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: statusColors.bg }]}>
                        <Text style={[styles.statusText, { color: statusColors.text }]}>
                            {status.replace('_', ' ')}
                        </Text>
                    </View>
                </View>

                <View style={[styles.gameBadge, { backgroundColor: `${colors.primary}15` }]}>
                    <Text style={[styles.gameText, { color: colors.primary }]}>{game}</Text>
                </View>

                <View style={[styles.statsDivider, { borderBottomColor: colors.border }]} />

                <View style={styles.statsRow}>
                    <View style={styles.statColumn}>
                        <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                            {t('ownerCourts.todaysBookings')}
                        </Text>
                        <Text style={[styles.statValue, { color: colors.text }]}>{todayBookings}</Text>
                    </View>
                    <View style={styles.statColumn}>
                        <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                            {t('ownerCourts.todaysRevenue')}
                        </Text>
                        <Text style={[styles.statValue, { color: '#059669' }]}>{revenue}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.manageButton, { backgroundColor: colors.primary }]}
                    onPress={onManage}
                >
                    <Edit size={16} color={colors.white} />
                    <Text style={[styles.manageButtonText, { color: colors.white }]}>
                        {t('ownerCourts.manageCourt')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        borderWidth: 1,
        marginBottom: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 160,
        backgroundColor: '#E5E7EB',
    },
    content: {
        padding: 16,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    titleContainer: {
        flex: 1,
        marginRight: 12,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    location: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        textTransform: 'capitalize',
    },
    gameBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginBottom: 16,
    },
    gameText: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
    },
    statsDivider: {
        borderBottomWidth: 1,
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statColumn: {
        flex: 1,
    },
    statLabel: {
        fontSize: 13,
        fontFamily: 'Inter-Regular',
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
    },
    manageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        gap: 8,
    },
    manageButtonText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
});
