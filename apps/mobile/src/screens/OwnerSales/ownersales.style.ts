import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 16,
      paddingBottom: 40,
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    filtersRow: {
      flexDirection: 'row',
      gap: 8,
    },
    filterButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
    },
    filterButtonActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    filterButtonInactive: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    filterText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      textTransform: 'capitalize',
    },
    filterTextActive: {
      color: colors.white,
    },
    filterTextInactive: {
      color: colors.text,
    },
    exportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    exportText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: colors.textSecondary,
    },
    statsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 20,
    },
    statCard: {
      width: '48%',
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    statIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    statLabel: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginBottom: 4,
      color: colors.textSecondary,
    },
    statValue: {
      fontSize: 18,
      fontFamily: 'Inter-SemiBold',
      color: colors.text,
    },
    chartContainer: {
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      marginBottom: 20,
      backgroundColor: colors.surface,
      borderColor: colors.border,
      paddingRight: 0,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 16,
      color: colors.text,
    },
    chartConfig: {
      marginVertical: 8,
      borderRadius: 16,
    },
    listContainer: {
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    listItemNoBorder: {
      borderBottomWidth: 0,
    },
    listItemTitle: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      marginBottom: 4,
      color: colors.text,
    },
    listItemSub: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      color: colors.textSecondary,
    },
    listItemValue: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: '#16a34a',
    },
    loadingContainer: {
      padding: 40,
      alignItems: 'center',
    },
  });
