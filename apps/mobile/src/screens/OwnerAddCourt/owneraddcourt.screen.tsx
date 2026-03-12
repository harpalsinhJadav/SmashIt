import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { useOwnerAddCourt } from './owneraddcourt.hooks';
import { createStyles } from './owneraddcourt.style';

export const OwnerAddCourtScreen = () => {
  const {
    t,
    colors,
    form,
    handleBack,
    handleChange,
    toggleDynamic,
    handleSubmit,
  } = useOwnerAddCourt();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('ownerAddCourt.title')}
        showBack
        onBackPress={handleBack}
        showLogo={false}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              {t('ownerAddCourt.courtName')}
            </Text>
            <TextInput
              style={styles.input}
              value={form.courtName}
              onChangeText={val => handleChange('courtName', val)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t('ownerAddCourt.location')}</Text>
            <TextInput
              style={styles.input}
              value={form.location}
              onChangeText={val => handleChange('location', val)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t('ownerAddCourt.gameType')}</Text>
            <TextInput
              style={styles.input}
              value={form.gameType}
              onChangeText={val => handleChange('gameType', val)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              {t('ownerCourtManagement.slotsTab.slotPrice')}
            </Text>
            <TextInput
              style={styles.input}
              value={form.price}
              onChangeText={val => handleChange('price', val)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfInput]}>
              <Text style={styles.inputLabel}>
                {t('ownerAddCourt.minDuration')}
              </Text>
              <TextInput
                style={styles.input}
                value={form.minDuration}
                onChangeText={val => handleChange('minDuration', val)}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputGroup, styles.halfInput]}>
              <Text style={styles.inputLabel}>
                {t('ownerAddCourt.maxDuration')}
              </Text>
              <TextInput
                style={styles.input}
                value={form.maxDuration}
                onChangeText={val => handleChange('maxDuration', val)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={toggleDynamic}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.checkbox,
                form.allowDynamic && styles.checkboxActive,
              ]}
            />
            <Text style={styles.checkboxLabel}>
              {t('ownerAddCourt.allowDynamic')}
            </Text>
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              {t('ownerAddCourt.facilities')}
            </Text>
            <TextInput
              style={styles.input}
              value={form.facilities}
              onChangeText={val => handleChange('facilities', val)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t('ownerAddCourt.status')}</Text>
            {/* Mock simple select using text input for now */}
            <TextInput
              style={styles.input}
              value={form.status}
              onChangeText={val => handleChange('status', val)}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>
              {t('ownerAddCourt.addCourt')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
