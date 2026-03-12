import { Picker } from '@react-native-picker/picker';
import { Mail, Phone } from 'lucide-react-native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Logo } from '../../components/Logo';
import { useLogin, UserRole } from './login.hooks';
import { createStyles } from './login.style';

export const LoginScreen = () => {
  const {
    t,
    colors,
    userType,
    setUserType,
    loginMethod,
    setLoginMethod,
    identifier,
    setIdentifier,
    handleLogin,
    navigateToSignup,
  } = useLogin();

  const styles = createStyles(colors);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Logo size="md" showText={false} />
          </View>
          <Text style={styles.title}>Smash It</Text>
          <Text style={styles.subtitle}>{t('common.bookYourCourt')}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>{t('common.loginAs')}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={userType}
              onValueChange={itemValue => setUserType(itemValue as UserRole)}
              dropdownIconColor={colors.primary}
              mode="dropdown"
            >
              <Picker.Item label={t('roles.player')} value="player" />
              <Picker.Item label={t('roles.owner')} value="owner" />
              <Picker.Item label={t('roles.assistant')} value="assistant" />
              <Picker.Item label={t('roles.admin')} value="admin" />
            </Picker>
          </View>

          <View style={styles.methodToggle}>
            <TouchableOpacity
              style={[
                styles.methodButton,
                loginMethod === 'email' && styles.methodButtonActive,
              ]}
              onPress={() => setLoginMethod('email')}
            >
              <Mail
                size={18}
                color={
                  loginMethod === 'email'
                    ? colors.primary
                    : colors.textSecondary
                }
              />
              <Text
                style={[
                  styles.methodText,
                  loginMethod === 'email' && styles.methodTextActive,
                ]}
              >
                {t('common.email')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodButton,
                loginMethod === 'phone' && styles.methodButtonActive,
              ]}
              onPress={() => setLoginMethod('phone')}
            >
              <Phone
                size={18}
                color={
                  loginMethod === 'phone'
                    ? colors.primary
                    : colors.textSecondary
                }
              />
              <Text
                style={[
                  styles.methodText,
                  loginMethod === 'phone' && styles.methodTextActive,
                ]}
              >
                {t('common.phone')}
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder={
              loginMethod === 'email'
                ? t('common.enterEmail')
                : t('common.enterPhone')
            }
            placeholderTextColor={colors.textSecondary}
            value={identifier}
            onChangeText={setIdentifier}
            keyboardType={
              loginMethod === 'email' ? 'email-address' : 'phone-pad'
            }
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
            <Text style={styles.submitButtonText}>{t('common.sendOtp')}</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>{t('common.newUser')} </Text>
            <TouchableOpacity onPress={navigateToSignup}>
              <Text style={styles.footerLink}>{t('common.signup')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
