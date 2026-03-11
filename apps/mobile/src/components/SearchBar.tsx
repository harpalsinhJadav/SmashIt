import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import { useTheme } from '../theme';
import { horizontalScale, verticalScale, moderateScale } from '../utils/helpers';

interface SearchBarProps {
    placeholder?: string;
    onPress?: () => void;
    editable?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
}

export const SearchBar = ({
    placeholder,
    onPress,
    editable = true,
    value,
    onChangeText,
}: SearchBarProps) => {
    const { colors } = useTheme();

    const Container = onPress ? TouchableOpacity : View;

    return (
        <Container
            onPress={onPress}
            style={[styles.container, { backgroundColor: colors.background, borderColor: colors.border }]}
        >
            <Search size={20} color={colors.textSecondary} style={styles.icon} />
            <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder={placeholder}
                placeholderTextColor={colors.textSecondary}
                editable={editable && !onPress}
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: moderateScale(10),
        paddingHorizontal: horizontalScale(12),
        height: verticalScale(48),
        marginVertical: verticalScale(10),
    },
    icon: {
        marginRight: horizontalScale(8),
    },
    input: {
        flex: 1,
        fontSize: moderateScale(16),
    },
});
