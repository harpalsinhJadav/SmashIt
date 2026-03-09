import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors, ThemeColors } from './colors';
import { fonts, fontSizes } from './fonts';

interface ThemeContextType {
    colors: ThemeColors;
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemColorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

    useEffect(() => {
        setIsDark(systemColorScheme === 'dark');
    }, [systemColorScheme]);

    const toggleTheme = () => setIsDark(!isDark);

    const theme: ThemeContextType = {
        colors: isDark ? darkColors : lightColors,
        fonts,
        fontSizes,
        isDark,
        toggleTheme,
    };

    return <ThemeContext.Provider value={ theme }> { children } </ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
