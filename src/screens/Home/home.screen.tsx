import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useHome } from './home.hooks';
import { createStyles } from './home.style';

export const HomeScreen = () => {
    const {
        t,
        colors,
        toggleTheme,
        isDark,
        count,
        handleIncrement,
        handleAsyncAction,
        isLoading,
    } = useHome();

    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('home.title')}</Text>
            <Text style={styles.description}>{t('home.description')}</Text>

            <Text style={[styles.title, { marginTop: 20 }]}>Count: {count}</Text>

            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.secondary }]} onPress={handleAsyncAction}>
                {isLoading ? (
                    <ActivityIndicator color="#FFF" />
                ) : (
                    <Text style={styles.buttonText}>Test Async Action</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.border }]} onPress={toggleTheme}>
                <Text style={[styles.buttonText, { color: colors.text }]}>
                    Switch to {isDark ? 'Light' : 'Dark'} Mode
                </Text>
            </TouchableOpacity>
        </View>
    );
};
