import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/helpers';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.surface,
        },
        header: {
            backgroundColor: colors.primary,
            paddingTop: verticalScale(60),
            paddingBottom: verticalScale(40),
            alignItems: 'center',
            borderBottomLeftRadius: moderateScale(30),
            borderBottomRightRadius: moderateScale(30),
        },
        logoContainer: {
            marginBottom: verticalScale(16),
            backgroundColor: '#FFFFFF',
            padding: moderateScale(10),
            borderRadius: moderateScale(15),
        },
        title: {
            fontSize: moderateScale(32),
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: verticalScale(8),
        },
        subtitle: {
            fontSize: moderateScale(16),
            color: 'rgba(255, 255, 255, 0.8)',
        },
        card: {
            backgroundColor: colors.background,
            marginHorizontal: horizontalScale(20),
            marginTop: verticalScale(-30),
            borderRadius: moderateScale(20),
            padding: moderateScale(24),
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
        },
        label: {
            fontSize: moderateScale(14),
            color: colors.textSecondary,
            marginBottom: verticalScale(8),
        },
        pickerContainer: {
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: moderateScale(10),
            marginBottom: verticalScale(20),
            ...Platform.select({
                ios: {
                    paddingVertical: verticalScale(12),
                },
                android: {
                    height: verticalScale(50),
                    justifyContent: 'center',
                }
            })
        },
        methodToggle: {
            flexDirection: 'row',
            backgroundColor: colors.surface,
            padding: moderateScale(4),
            borderRadius: moderateScale(10),
            marginBottom: verticalScale(20),
        },
        methodButton: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: verticalScale(10),
            borderRadius: moderateScale(8),
            gap: horizontalScale(8),
        },
        methodButtonActive: {
            backgroundColor: colors.background,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
        },
        methodText: {
            fontSize: moderateScale(14),
            fontWeight: '500',
            color: colors.textSecondary,
        },
        methodTextActive: {
            color: colors.primary,
        },
        input: {
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: moderateScale(10),
            paddingHorizontal: horizontalScale(16),
            paddingVertical: verticalScale(14),
            fontSize: moderateScale(16),
            color: colors.text,
            marginBottom: verticalScale(24),
        },
        submitButton: {
            backgroundColor: colors.primary,
            borderRadius: moderateScale(10),
            paddingVertical: verticalScale(16),
            alignItems: 'center',
            marginBottom: verticalScale(20),
        },
        submitButtonText: {
            color: '#FFFFFF',
            fontSize: moderateScale(16),
            fontWeight: 'bold',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerText: {
            fontSize: moderateScale(14),
            color: colors.textSecondary,
        },
        footerLink: {
            fontSize: moderateScale(14),
            color: colors.primary,
            fontWeight: 'bold',
        },
    });
