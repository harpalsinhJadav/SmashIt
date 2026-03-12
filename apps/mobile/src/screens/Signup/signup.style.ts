import { Platform, StyleSheet } from 'react-native';

import { ThemeColors } from '../../theme/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/helpers';

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
      backgroundColor: colors.white,
      padding: moderateScale(10),
      borderRadius: moderateScale(15),
    },
    title: {
      fontSize: moderateScale(32),
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: verticalScale(8),
    },
    subtitle: {
      fontSize: moderateScale(16),
      color: colors.overlay,
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
      marginBottom: verticalScale(20),
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
      marginBottom: verticalScale(16),
      ...Platform.select({
        ios: {
          paddingVertical: verticalScale(8),
        },
        android: {
          height: verticalScale(50),
          justifyContent: 'center',
        },
      }),
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(16),
      paddingVertical: verticalScale(12),
      fontSize: moderateScale(16),
      color: colors.text,
      marginBottom: verticalScale(16),
    },
    submitButton: {
      backgroundColor: colors.primary,
      borderRadius: moderateScale(10),
      paddingVertical: verticalScale(16),
      alignItems: 'center',
      marginTop: verticalScale(8),
      marginBottom: verticalScale(20),
    },
    submitButtonText: {
      color: colors.white,
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(20),
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
    scrollContent: {
      flexGrow: 1,
    },
  });
