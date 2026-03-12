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
      gap: 20,
    },
    headerCard: {
      alignItems: 'center',
      padding: 24,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    avatarContainer: {
      width: 96,
      height: 96,
      borderRadius: 48,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      backgroundColor: `${colors.primary}26`, // Colors.primary with 15% opacity (hex approximation)
    },
    nameText: {
      fontSize: 20,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 4,
      color: colors.text,
    },
    roleText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: colors.textSecondary,
    },
    detailsCard: {
      borderRadius: 16,
      borderWidth: 1,
      overflow: 'hidden',
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      gap: 12,
      borderBottomColor: colors.border,
    },
    detailContent: {
      flex: 1,
      justifyContent: 'center',
    },
    detailLabel: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginBottom: 2,
      color: colors.textSecondary,
    },
    detailValue: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      color: colors.text,
    },
    editButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: colors.primary,
    },
    statsCard: {
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    statsTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 16,
      color: colors.text,
    },
    statsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statItem: {
      alignItems: 'center',
      flex: 1,
    },
    statItemValue: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      marginBottom: 4,
      color: colors.text,
    },
    statItemLabel: {
      fontSize: 13,
      fontFamily: 'Inter-Medium',
      color: colors.textSecondary,
    },
    actionsCard: {
      borderRadius: 16,
      borderWidth: 1,
      overflow: 'hidden',
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 12,
    },
    actionRowBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    actionText: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
    },
    logoutText: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      color: colors.text,
    },
    deleteText: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      color: colors.error,
    },
    padding4: {
      padding: 4,
    },
    noBorder: {
      borderBottomWidth: 0,
    },
  });
