import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';
import { useTheme } from '../theme';
import { moderateScale, horizontalScale, verticalScale } from '../utils/helpers';

interface CourtListItemProps {
    name: string;
    location: string;
    game: string;
    price: string;
    rating: number;
    available: boolean;
    image: string;
    onPress: () => void;
}

export const CourtListItem = ({
    name,
    location,
    game,
    price,
    rating,
    available,
    image,
    onPress,
}: CourtListItemProps) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor: colors.background, borderColor: colors.border }]}
        >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.titleSection}>
                        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>{name}</Text>
                        <View style={styles.locationContainer}>
                            <MapPin size={14} color={colors.textSecondary} />
                            <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>{location}</Text>
                        </View>
                    </View>
                    <View style={[styles.ratingContainer, { backgroundColor: colors.surface }]}>
                        <Star size={14} color="#FBBF24" fill="#FBBF24" />
                        <Text style={[styles.rating, { color: colors.text }]}>{rating}</Text>
                    </View>
                </View>

                <View style={styles.tagSection}>
                    <View style={[styles.tag, { backgroundColor: colors.surface }]}>
                        <Text style={[styles.tagText, { color: colors.primary }]}>{game}</Text>
                    </View>
                    <Text style={[styles.availability, { color: available ? '#059669' : '#DC2626' }]}>
                        {available ? 'Available Today' : 'Fully Booked'}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={[styles.price, { color: colors.primary }]}>{price}</Text>
                    <View style={[styles.viewButton, { backgroundColor: colors.primary }]}>
                        <Text style={[styles.viewButtonText, { color: colors.white }]}>View Slots</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: moderateScale(15),
        borderWidth: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: verticalScale(16),
    },
    image: {
        width: horizontalScale(120),
        height: '100%',
    },
    content: {
        flex: 1,
        padding: moderateScale(12),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    titleSection: {
        flex: 1,
        marginRight: horizontalScale(8),
    },
    name: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(4),
    },
    location: {
        fontSize: moderateScale(12),
        marginLeft: horizontalScale(4),
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(6),
        paddingVertical: verticalScale(2),
        borderRadius: moderateScale(6),
        gap: horizontalScale(4),
    },
    rating: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
    },
    tagSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(8),
        gap: horizontalScale(8),
    },
    tag: {
        paddingHorizontal: horizontalScale(8),
        paddingVertical: verticalScale(4),
        borderRadius: moderateScale(6),
    },
    tagText: {
        fontSize: moderateScale(11),
        fontWeight: '600',
    },
    availability: {
        fontSize: moderateScale(11),
        fontWeight: '500',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(12),
    },
    price: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    viewButton: {
        paddingHorizontal: horizontalScale(12),
        paddingVertical: verticalScale(6),
        borderRadius: moderateScale(8),
    },
    viewButtonText: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
    },
});
