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
        headerCard: {
            backgroundColor: colors.background,
            padding: moderateScale(24),
            borderRadius: moderateScale(20),
            alignItems: 'center',
            marginBottom: verticalScale(20),
            borderWidth: 1,
            borderColor: colors.border,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            elevation: 2,
        },
        avatarContainer: {
            width: moderateScale(90),
            height: moderateScale(90),
            borderRadius: moderateScale(45),
            backgroundColor: colors.surface,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: verticalScale(12),
        },
        userName: {
            fontSize: moderateScale(20),
            fontWeight: 'bold',
            marginBottom: verticalScale(2),
        },
        userRole: {
            fontSize: moderateScale(14),
        },
        section: {
            backgroundColor: colors.background,
            borderRadius: moderateScale(15),
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: verticalScale(20),
            overflow: 'hidden',
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: moderateScale(16),
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },
        itemIcon: {
            marginRight: horizontalScale(16),
        },
        itemContent: {
            flex: 1,
        },
        itemLabel: {
            fontSize: moderateScale(12),
            marginBottom: verticalScale(2),
        },
        itemValue: {
            fontSize: moderateScale(15),
            fontWeight: '500',
        },
        actionItem: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: moderateScale(16),
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },
        actionText: {
            fontSize: moderateScale(15),
            fontWeight: '500',
            flex: 1,
            marginLeft: horizontalScale(16),
        },
        changeText: {
            fontSize: moderateScale(13),
            fontWeight: '600',
        },
    });
