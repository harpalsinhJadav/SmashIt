import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { createStyles } from './owneraddcourt.style';
import { useOwnerAddCourt } from './owneraddcourt.hooks';
import { AppHeader } from '../../components/AppHeader';

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
            <AppHeader title={t('ownerAddCourt.title')} showBack onBackPress={handleBack} showLogo={false} />
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <View style={styles.inputGroup}>
                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                            {t('ownerAddCourt.courtName')}
                        </Text>
                        <TextInput
                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                            value={form.courtName}
                            onChangeText={(val) => handleChange('courtName', val)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                            {t('ownerAddCourt.location')}
                        </Text>
                        <TextInput
                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                            value={form.location}
                            onChangeText={(val) => handleChange('location', val)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                            {t('ownerAddCourt.gameType')}
                        </Text>
                        <TextInput
                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                            value={form.gameType}
                            onChangeText={(val) => handleChange('gameType', val)}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, styles.halfInput]}>
                            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                {t('ownerAddCourt.minDuration')}
                            </Text>
                            <TextInput
                                style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                value={form.minDuration}
                                onChangeText={(val) => handleChange('minDuration', val)}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.inputGroup, styles.halfInput]}>
                            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                {t('ownerAddCourt.maxDuration')}
                            </Text>
                            <TextInput
                                style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                value={form.maxDuration}
                                onChangeText={(val) => handleChange('maxDuration', val)}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.checkboxRow} onPress={toggleDynamic} activeOpacity={0.8}>
                        <View style={{
                            width: 20, height: 20, borderWidth: 2, borderColor: colors.primary,
                            backgroundColor: form.allowDynamic ? colors.primary : 'transparent',
                            borderRadius: 4
                        }} />
                        <Text style={[styles.checkboxLabel, { color: colors.text }]}>
                            {t('ownerAddCourt.allowDynamic')}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.inputGroup}>
                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                            {t('ownerAddCourt.facilities')}
                        </Text>
                        <TextInput
                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                            value={form.facilities}
                            onChangeText={(val) => handleChange('facilities', val)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                            {t('ownerAddCourt.status')}
                        </Text>
                        {/* Mock simple select using text input for now */}
                        <TextInput
                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                            value={form.status}
                            onChangeText={(val) => handleChange('status', val)}
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.submitButton, { backgroundColor: colors.primary }]}
                        onPress={handleSubmit}
                    >
                        <Text style={[styles.submitButtonText, { color: colors.white }]}>
                            {t('ownerAddCourt.addCourt')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
