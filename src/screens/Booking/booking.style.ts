import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/helpers';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.surface,
        },
        content: {
            padding: moderateScale(16),
            paddingBottom: verticalScale(20),
        },
        searchSection: {
            marginBottom: verticalScale(16),
        },
        locationSection: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.background,
            paddingHorizontal: horizontalScale(16),
            paddingVertical: verticalScale(12),
            borderRadius: moderateScale(10),
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: verticalScale(16),
        },
        locationLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: horizontalScale(8),
        },
        locationText: {
            fontSize: moderateScale(14),
            fontWeight: '500',
        },
        changeText: {
            fontSize: moderateScale(12),
            fontWeight: 'bold',
        },
        filterSection: {
            paddingBottom: verticalScale(16),
        },
        filterList: {
            paddingRight: horizontalScale(16),
        },
        moreFilters: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.background,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: moderateScale(10),
            paddingHorizontal: horizontalScale(12),
            paddingVertical: verticalScale(8),
            marginLeft: horizontalScale(4),
            gap: horizontalScale(6),
        },
        moreFiltersText: {
            fontSize: moderateScale(14),
            fontWeight: '500',
        },
        courtsHeader: {
            marginBottom: verticalScale(12),
        },
        courtsCount: {
            fontSize: moderateScale(14),
        },
    });
