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
      paddingBottom: 32,
    },
    statusCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      marginBottom: 16,
    },
    gameTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      marginBottom: 4,
    },
    statusLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
    },
    statusBadge: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    statusBadgeText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      textTransform: 'capitalize',
    },
    tabsContainer: {
      borderRadius: 12,
      borderWidth: 1,
      marginBottom: 16,
      overflow: 'hidden',
    },
    tabRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
    },
    tabButton: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    tabButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
    },
    tabContent: {
      padding: 16,
    },
    // Slots Tab
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
    },
    addSlotButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      gap: 6,
    },
    addSlotText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
    },
    slotCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 8,
    },
    slotTime: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      marginBottom: 4,
    },
    slotPrice: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
    },
    slotStatusBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      marginRight: 8,
    },
    slotStatusText: {
      fontSize: 12,
      fontFamily: 'Inter-Medium',
      textTransform: 'capitalize',
    },
    addMoreSlotsButton: {
      paddingVertical: 14,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    addMoreSlotsText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
    },
    inputGroup: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 14,
      fontFamily: 'Inter-Regular',
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    checkboxLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      marginLeft: 8,
    },
    saveButton: {
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    saveButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
    },
    assistantCard: {
      padding: 12,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 8,
    },
    assistantHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    assistantName: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      marginBottom: 4,
    },
    assistantEmail: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
    },
    assistantCourts: {
      fontSize: 12,
      fontFamily: 'Inter-Medium',
    },
    assistantBadge: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
      marginTop: 8,
      alignSelf: 'flex-start',
    },
    removeButton: {
      fontSize: 13,
      fontFamily: 'Inter-Medium',
    },
    loadingContainer: {
      padding: 40,
      alignItems: 'center',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: colors.background,
      padding: 24,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
    },
    modalLabel: {
      color: colors.textSecondary,
      marginBottom: 8,
      fontWeight: '600',
    },
    modalInput: {
      borderWidth: 1,
      borderColor: colors.border,
      padding: 12,
      borderRadius: 8,
      marginBottom: 16,
      color: colors.text,
    },
    modalChipRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 24,
    },
    modalChip: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    modalChipActive: {
      backgroundColor: colors.primary,
    },
    modalChipText: {
      color: colors.textSecondary,
      fontSize: 12,
    },
    modalChipTextActive: {
      color: colors.white,
    },
    modalFooter: {
      flexDirection: 'row',
      gap: 12,
    },
    modalButton: {
      flex: 1,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    modalCancelButton: {
      borderWidth: 1,
      borderColor: colors.border,
    },
    modalSaveButton: {
      backgroundColor: colors.primary,
    },
    modalButtonText: {
      fontWeight: '600',
    },
    modalDeleteButton: {
      padding: 14,
      alignItems: 'center',
      marginTop: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
    },
    modalDeleteText: {
      fontWeight: '600',
    },
    statusBadgeInactive: {
      backgroundColor: colors.background,
    },
    statusBadgeActive: {
      backgroundColor: colors.successBg,
    },
    statusBadgeWarning: {
      backgroundColor: colors.warningBg,
    },
    statusTextInactive: {
      color: colors.textSecondary,
    },
    statusTextActive: {
      color: colors.successText,
    },
    statusTextWarning: {
      color: colors.warningText,
    },
    rowGap8: {
      flexDirection: 'row',
      gap: 8,
    },
    rowGap12: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    flex1: {
      flex: 1,
    },
    padding4: {
      padding: 4,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxActive: {
      backgroundColor: colors.primary,
    },
    mb12: {
      marginBottom: 12,
    },
    pb0: {
      paddingBottom: 0,
    },
  });
