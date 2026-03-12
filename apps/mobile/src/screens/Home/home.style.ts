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
      backgroundColor: colors.surface,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: moderateScale(16),
      paddingBottom: verticalScale(100), // Space for bottom nav if needed
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(8),
    },
    locationText: {
      fontSize: moderateScale(14),
      fontWeight: '500',
      marginLeft: horizontalScale(4),
    },
    changeText: {
      fontSize: moderateScale(12),
      marginLeft: 'auto',
    },
    section: {
      marginTop: verticalScale(24),
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(12),
    },
    sectionTitle: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
    },
    viewAll: {
      fontSize: moderateScale(14),
    },
    quickActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(16),
    },
  });
