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
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 12,
        },
        halfInput: {
            flex: 1,
        },
        checkboxRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            marginTop: 8,
        },
        checkboxLabel: {
            fontSize: 14,
            fontFamily: 'Inter-Regular',
            marginLeft: 8,
        },
        submitButton: {
            paddingVertical: 14,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 16,
        },
        submitButtonText: {
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
        },
    });
