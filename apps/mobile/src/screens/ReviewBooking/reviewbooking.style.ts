import { StyleSheet } from 'react-native';
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
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      padding: moderateScale(16),
    },
    section: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(16),
      borderWidth: 1,
      borderColor: colors.border,
    },
    sectionTitle: {
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: verticalScale(12),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: verticalScale(8),
    },
    label: {
      fontSize: moderateScale(14),
      color: colors.textSecondary,
    },
    value: {
      fontSize: moderateScale(14),
      fontWeight: '500',
      color: colors.text,
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
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: colors.text,
    },
    totalValue: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      color: colors.primary,
    },
    footer: {
      padding: moderateScale(16),
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    confirmButton: {
      backgroundColor: colors.primary,
      paddingVertical: verticalScale(14),
      borderRadius: moderateScale(12),
      alignItems: 'center',
    },
    confirmButtonText: {
      color: colors.white,
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
  });
