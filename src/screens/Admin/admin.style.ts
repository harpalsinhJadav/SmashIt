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
        button: {
            marginTop: 20,
            padding: 15,
            backgroundColor: colors.error,
            borderRadius: 10,
        },
        buttonText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
    });
