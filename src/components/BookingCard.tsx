import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme';
import { moderateScale, verticalScale, horizontalScale } from '../utils/helpers';

interface BookingCardProps {
    court: string;
    date: string;
    game: string;
    onPress?: () => void;
}

export const BookingCard = ({ court, date, game, onPress }: BookingCardProps) => {
    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={[styles.container, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <View style={styles.info}>
                <Text style={[styles.court, { color: colors.text }]}>{court}</Text>
                <Text style={[styles.game, { color: colors.textSecondary }]}>{game}</Text>
                <Text style={[styles.date, { color: colors.primary }]}>{date}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={[styles.button, { borderColor: colors.primary }]}>
                <Text style={[styles.buttonText, { color: colors.primary }]}>{t('common.view')}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(16),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(12),
    },
    info: {
        flex: 1,
    },
    court: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    game: {
        fontSize: moderateScale(14),
        marginTop: verticalScale(2),
    },
    date: {
        fontSize: moderateScale(14),
        fontWeight: '500',
        marginTop: verticalScale(4),
    },
    button: {
        paddingHorizontal: horizontalScale(16),
        paddingVertical: verticalScale(6),
        borderRadius: moderateScale(8),
        borderWidth: 1,
    },
    buttonText: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
    },
});
