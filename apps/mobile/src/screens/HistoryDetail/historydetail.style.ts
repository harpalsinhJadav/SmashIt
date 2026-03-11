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
        },
        statusBanner: {
            padding: moderateScale(16),
            borderRadius: moderateScale(15),
            alignItems: 'center',
            marginBottom: verticalScale(16),
        },
        statusTitle: {
            fontSize: moderateScale(18),
            fontWeight: 'bold',
            marginTop: verticalScale(8),
            textTransform: 'capitalize',
        },
        statusDesc: {
            fontSize: moderateScale(14),
            marginTop: verticalScale(4),
            textAlign: 'center',
        },
        card: {
            backgroundColor: colors.background,
            padding: moderateScale(16),
            borderRadius: moderateScale(15),
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: verticalScale(16),
        },
        cardTitle: {
            fontSize: moderateScale(16),
            fontWeight: 'bold',
            marginBottom: verticalScale(12),
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: verticalScale(12),
        },
        label: {
            fontSize: moderateScale(14),
            color: colors.textSecondary,
        },
        value: {
            fontSize: moderateScale(14),
            fontWeight: '500',
            color: colors.text,
            flex: 1,
            textAlign: 'right',
            marginLeft: horizontalScale(20),
        },
        divider: {
            height: 1,
            backgroundColor: colors.border,
            marginVertical: verticalScale(12),
        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(4),
        },
        totalLabel: {
            fontSize: moderateScale(16),
            fontWeight: 'bold',
        },
        totalValue: {
            fontSize: moderateScale(18),
            fontWeight: 'bold',
        },
        footer: {
            padding: moderateScale(16),
            paddingBottom: verticalScale(32),
            gap: verticalScale(12),
        },
        primaryBtn: {
            backgroundColor: colors.primary,
            padding: moderateScale(16),
            borderRadius: moderateScale(12),
            alignItems: 'center',
        },
        primaryBtnText: {
            color: colors.white,
            fontSize: moderateScale(16),
            fontWeight: 'bold',
        },
        secondaryBtn: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: horizontalScale(8),
            padding: moderateScale(16),
            borderRadius: moderateScale(12),
            borderWidth: 1,
            borderColor: colors.primary,
        },
        secondaryBtnText: {
            color: colors.primary,
            fontSize: moderateScale(16),
            fontWeight: 'bold',
        },
    });
