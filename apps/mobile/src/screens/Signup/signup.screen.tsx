import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSignup } from './signup.hooks';
import { createStyles } from './signup.style';
import { Logo } from '../../components/Logo';
import { UserRole } from '../Login/login.hooks';

export const SignupScreen = () => {
    const {
        t,
        colors,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        userType,
        setUserType,
        handleSignup,
        navigateToLogin,
    } = useSignup();

    const styles = createStyles(colors);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Logo size="md" showText={false} />
                    </View>
                    <Text style={styles.title}>Smash It</Text>
                    <Text style={styles.subtitle}>{t('common.bookYourCourt')}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>{t('common.signup')}</Text>

                    <TextInput
                        style={styles.input}
                        placeholder={t('common.enterName')}
                        placeholderTextColor={colors.textSecondary}
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder={t('common.enterEmail')}
                        placeholderTextColor={colors.textSecondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder={t('common.enterPhone')}
                        placeholderTextColor={colors.textSecondary}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    <Text style={styles.label}>{t('common.loginAs')}</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={userType}
                            onValueChange={(itemValue) => setUserType(itemValue as UserRole)}
                            dropdownIconColor={colors.primary}
                        >
                            <Picker.Item label={t('roles.player')} value="player" />
                            <Picker.Item label={t('roles.owner')} value="owner" />
                            <Picker.Item label={t('roles.assistant')} value="assistant" />
                            <Picker.Item label={t('roles.admin')} value="admin" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
                        <Text style={styles.submitButtonText}>{t('common.signup')}</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{t('common.alreadyHaveAccount')} </Text>
                        <TouchableOpacity onPress={navigateToLogin}>
                            <Text style={styles.footerLink}>{t('common.login')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
