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
        },
        avatarContainer: {
            width: 96,
            height: 96,
            borderRadius: 48,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
        },
        nameText: {
            fontSize: 20,
            fontFamily: 'Inter-SemiBold',
            marginBottom: 4,
        },
        roleText: {
            fontSize: 14,
            fontFamily: 'Inter-Medium',
        },
        detailsCard: {
            borderRadius: 16,
            borderWidth: 1,
            overflow: 'hidden',
        },
        detailRow: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderBottomWidth: 1,
            gap: 12,
        },
        detailContent: {
            flex: 1,
            justifyContent: 'center',
        },
        detailLabel: {
            fontSize: 13,
            fontFamily: 'Inter-Regular',
            marginBottom: 2,
        },
        detailValue: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
        },
        editButtonText: {
            fontSize: 14,
            fontFamily: 'Inter-Medium',
        },
        statsCard: {
            padding: 16,
            borderRadius: 16,
            borderWidth: 1,
        },
        statsTitle: {
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
            marginBottom: 16,
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
        },
        statItemLabel: {
            fontSize: 13,
            fontFamily: 'Inter-Medium',
        },
        actionsCard: {
            borderRadius: 16,
            borderWidth: 1,
            overflow: 'hidden',
        },
        actionRow: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            gap: 12,
        },
        actionRowBorder: {
            borderBottomWidth: 1,
        },
        actionText: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
        },
        logoutText: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
        },
        deleteText: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
            color: '#DC2626',
        }
    });
