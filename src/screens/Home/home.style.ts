import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.text,
            marginBottom: 10,
        },
        description: {
            fontSize: 16,
            color: colors.textSecondary,
            textAlign: 'center',
        },
        button: {
            marginTop: 20,
            padding: 15,
            backgroundColor: colors.primary,
            borderRadius: 10,
        },
        buttonText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
    });
