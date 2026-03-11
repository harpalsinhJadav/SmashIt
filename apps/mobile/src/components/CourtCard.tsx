import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../theme';
import { moderateScale, verticalScale, horizontalScale } from '../utils/helpers';

interface CourtCardProps {
    name: string;
    location: string;
    game: string;
    price: string;
    image: string;
    onPress: () => void;
}

export const CourtCard = ({ name, location, game, price, image, onPress }: CourtCardProps) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor: colors.background, borderColor: colors.border }]}
        >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>{name}</Text>
                <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>{location}</Text>
                <View style={styles.footer}>
                    <Text style={[styles.game, { color: colors.text }]}>{game}</Text>
                    <Text style={[styles.price, { color: colors.primary }]}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: moderateScale(15),
        borderWidth: 1,
        overflow: 'hidden',
        marginBottom: verticalScale(16),
        width: horizontalScale(280),
        marginRight: horizontalScale(16),
    },
    image: {
        width: '100%',
        height: verticalScale(140),
    },
    content: {
        padding: moderateScale(12),
    },
    name: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    location: {
        fontSize: moderateScale(14),
        marginTop: verticalScale(2),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(8),
    },
    game: {
        fontSize: moderateScale(14),
    },
    price: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
    },
});
