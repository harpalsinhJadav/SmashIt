import { StyleSheet, Dimensions } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/helpers';

const { width } = Dimensions.get('window');

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.surface,
        },
        image: {
            width: '100%',
            height: verticalScale(250),
        },
        headerOverlay: {
            position: 'absolute',
            top: verticalScale(40),
            left: horizontalScale(16),
            zIndex: 10,
        },
        backButton: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: moderateScale(8),
            borderRadius: moderateScale(20),
        },
        content: {
            padding: moderateScale(16),
            paddingBottom: verticalScale(100),
        },
        infoCard: {
            backgroundColor: colors.background,
            padding: moderateScale(16),
            borderRadius: moderateScale(15),
            marginBottom: verticalScale(16),
        },
        titleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: verticalScale(8),
        },
        name: {
            fontSize: moderateScale(24),
            fontWeight: 'bold',
            flex: 1,
            marginRight: horizontalScale(8),
        },
        ratingBadge: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ECFDF5', // Light green
            paddingHorizontal: horizontalScale(8),
            paddingVertical: verticalScale(4),
            borderRadius: moderateScale(8),
            gap: horizontalScale(4),
        },
        ratingText: {
            fontSize: moderateScale(14),
            fontWeight: 'bold',
            color: '#065F46',
        },
        reviewsText: {
            fontSize: moderateScale(12),
            color: colors.textSecondary,
        },
        locationRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: verticalScale(12),
            gap: horizontalScale(4),
        },
        location: {
            fontSize: moderateScale(14),
            color: colors.textSecondary,
        },
        gamePriceRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: horizontalScale(12),
        },
        gameTag: {
            backgroundColor: colors.surface,
            paddingHorizontal: horizontalScale(12),
            paddingVertical: verticalScale(4),
            borderRadius: moderateScale(8),
        },
        gameText: {
            fontSize: moderateScale(14),
            fontWeight: '600',
            color: colors.primary,
        },
        priceText: {
            fontSize: moderateScale(18),
            fontWeight: 'bold',
            color: colors.primary,
        },
        section: {
            backgroundColor: colors.background,
            padding: moderateScale(16),
            borderRadius: moderateScale(15),
            marginBottom: verticalScale(16),
        },
        sectionTitle: {
            fontSize: moderateScale(18),
            fontWeight: 'bold',
            marginBottom: verticalScale(12),
            flexDirection: 'row',
            alignItems: 'center',
            gap: horizontalScale(8),
        },
        grid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: horizontalScale(12),
        },
        facilityItem: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: horizontalScale(8),
            width: (width - 64) / 2, // 2 columns roughly
            marginBottom: verticalScale(8),
        },
        facilityText: {
            fontSize: moderateScale(14),
            color: colors.text,
        },
        slotGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: moderateScale(10),
        },
        slotButton: {
            width: (width - 64) / 2, // 2 columns
            padding: moderateScale(12),
            borderRadius: moderateScale(10),
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        popularBadge: {
            position: 'absolute',
            top: -moderateScale(8),
            right: -moderateScale(4),
            backgroundColor: '#F97316',
            paddingHorizontal: horizontalScale(8),
            paddingVertical: verticalScale(2),
            borderRadius: moderateScale(10),
        },
        popularText: {
            color: colors.white,
            fontSize: moderateScale(10),
            fontWeight: 'bold',
        },
        slotTime: {
            fontSize: moderateScale(12),
            fontWeight: '500',
        },
        policyCard: {
            backgroundColor: '#FFFBEB', // Light yellow
            borderColor: '#FEF3C7',
            borderWidth: 1,
            padding: moderateScale(16),
            borderRadius: moderateScale(15),
            marginBottom: verticalScale(16),
        },
        policyTitle: {
            fontSize: moderateScale(16),
            fontWeight: 'bold',
            color: '#92400E',
            marginBottom: verticalScale(4),
        },
        policyText: {
            fontSize: moderateScale(13),
            color: '#B45309',
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.background,
            padding: moderateScale(16),
            borderTopWidth: 1,
            borderTopColor: colors.border,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        footerInfo: {
            flex: 1,
        },
        footerLabel: {
            fontSize: moderateScale(12),
            color: colors.textSecondary,
        },
        footerValue: {
            fontSize: moderateScale(16),
            fontWeight: 'bold',
            color: colors.text,
        },
        bookButton: {
            backgroundColor: colors.primary,
            paddingHorizontal: horizontalScale(24),
            paddingVertical: verticalScale(12),
            borderRadius: moderateScale(10),
        },
        bookButtonText: {
            color: colors.white,
            fontSize: moderateScale(16),
            fontWeight: 'bold',
        },
        dateButton: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.border,
            padding: moderateScale(12),
            borderRadius: moderateScale(10),
            gap: horizontalScale(8),
        },
        dateText: {
            fontSize: moderateScale(16),
            color: colors.text,
        },
    });
