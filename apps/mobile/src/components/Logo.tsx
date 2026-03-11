import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { useTheme } from '../theme';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
}

export const Logo = ({ size = 'md', showText = true }: LogoProps) => {
    const { colors } = useTheme();

    const sizes = {
        sm: { icon: 32, fontSize: 18 },
        md: { icon: 40, fontSize: 24 },
        lg: { icon: 80, fontSize: 36 },
    };

    const currentSize = sizes[size];

    return (
        <View style={styles.container}>
            <Svg
                width={currentSize.icon}
                height={currentSize.icon}
                viewBox="0 0 100 100"
                fill="none"
            >
                {/* Racquet Frame */}
                <Circle
                    cx="35"
                    cy="35"
                    r="22"
                    stroke={colors.primary}
                    strokeWidth="4"
                    fill="none"
                />
                {/* Racquet Strings - Vertical */}
                <Line x1="25" y1="20" x2="25" y2="50" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="30" y1="18" x2="30" y2="52" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="35" y1="17" x2="35" y2="53" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="40" y1="18" x2="40" y2="52" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="45" y1="20" x2="45" y2="50" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                {/* Racquet Strings - Horizontal */}
                <Line x1="20" y1="25" x2="50" y2="25" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="18" y1="30" x2="52" y2="30" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="17" y1="35" x2="53" y2="35" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="18" y1="40" x2="52" y2="40" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                <Line x1="20" y1="45" x2="50" y2="45" stroke={colors.primary} strokeWidth="1" opacity={0.6} />
                {/* Racquet Handle */}
                <Path
                    d="M 45 50 L 52 70 L 48 70 L 41 50"
                    fill={colors.primary}
                />
                <Rect x="47" y="70" width="6" height="8" rx="1" fill={colors.secondary} />
                {/* Ball */}
                <Circle cx="70" cy="25" r="8" fill="#FF6B00" />
                {/* Motion lines */}
                <Line x1="85" y1="20" x2="78" y2="23" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" opacity={0.5} />
                <Line x1="88" y1="25" x2="80" y2="25" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" opacity={0.5} />
                <Line x1="85" y1="30" x2="78" y2="27" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" opacity={0.5} />
            </Svg>

            {showText && (
                <Text style={[styles.text, { fontSize: currentSize.fontSize, color: colors.primary }]}>
                    Smash It
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
});
