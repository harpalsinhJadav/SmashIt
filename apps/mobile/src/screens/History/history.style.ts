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
    content: {
      padding: moderateScale(16),
      flex: 1,
    },
    filterContainer: {
      marginBottom: verticalScale(16),
    },
    filterList: {
      paddingRight: horizontalScale(16),
    },
    listContent: {
      paddingBottom: verticalScale(20),
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(100),
    },
    emptyText: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      marginTop: verticalScale(12),
      color: colors.textSecondary,
    },
  });
