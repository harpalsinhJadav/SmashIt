import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { User, Mail, Phone, MapPin, LogOut } from 'lucide-react-native';
import { useOwnerProfileScreen } from './ownerprofile.hooks';
import { createStyles } from './ownerprofile.style';
import { AppHeader } from '../../components/AppHeader';

export const OwnerProfileScreen = () => {
    const {
        t,
        colors,
        handleNotifications,
        handleLogout,
        handleEditLocation,
        handleDeleteAccount,
    } = useOwnerProfileScreen();

    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader
                title={t('ownerProfile.title')}
                showBack={false}
                showLogo={false}
                onNotificationPress={handleNotifications}
            />

            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>

                    {/* Profile Header */}
                    <View style={[styles.headerCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <View style={[styles.avatarContainer, { backgroundColor: `${colors.primary}15` }]}>
                            <User size={48} color={colors.primary} />
                        </View>
                        <Text style={[styles.nameText, { color: colors.text }]}>Amit Verma</Text>
                        <Text style={[styles.roleText, { color: colors.textSecondary }]}>{t('ownerProfile.role')}</Text>
                    </View>

                    {/* Profile Details */}
                    <View style={[styles.detailsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <View style={[styles.detailRow, { borderBottomColor: colors.border }]}>
                            <Mail size={20} color={colors.textSecondary} />
                            <View style={styles.detailContent}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>{t('ownerProfile.email')}</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>amit.verma@example.com</Text>
                            </View>
                        </View>

                        <View style={[styles.detailRow, { borderBottomColor: colors.border }]}>
                            <Phone size={20} color={colors.textSecondary} />
                            <View style={styles.detailContent}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>{t('ownerProfile.phone')}</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>+91 99999 88888</Text>
                            </View>
                        </View>

                        <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
                            <MapPin size={20} color={colors.textSecondary} />
                            <View style={styles.detailContent}>
                                <Text style={[styles.detailLabel, { color: colors.textSecondary }]}>{t('ownerProfile.businessLocation')}</Text>
                                <Text style={[styles.detailValue, { color: colors.text }]}>Mumbai, Maharashtra</Text>
                            </View>
                            <TouchableOpacity onPress={handleEditLocation} style={{ padding: 4 }}>
                                <Text style={[styles.editButtonText, { color: colors.primary }]}>{t('ownerProfile.edit')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Stats */}
                    <View style={[styles.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <Text style={[styles.statsTitle, { color: colors.text }]}>{t('ownerProfile.businessStats')}</Text>
                        <View style={styles.statsGrid}>
                            <View style={styles.statItem}>
                                <Text style={[styles.statItemValue, { color: colors.text }]}>3</Text>
                                <Text style={[styles.statItemLabel, { color: colors.textSecondary }]}>{t('ownerProfile.courts')}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={[styles.statItemValue, { color: colors.text }]}>2</Text>
                                <Text style={[styles.statItemLabel, { color: colors.textSecondary }]}>{t('ownerProfile.assistants')}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={[styles.statItemValue, { color: colors.text }]}>156</Text>
                                <Text style={[styles.statItemLabel, { color: colors.textSecondary }]}>{t('ownerProfile.bookings')}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Actions */}
                    <View style={[styles.actionsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <TouchableOpacity
                            style={[styles.actionRow, styles.actionRowBorder, { borderBottomColor: colors.border }]}
                            onPress={handleLogout}
                        >
                            <LogOut size={20} color={colors.textSecondary} />
                            <Text style={[styles.logoutText, { color: colors.text }]}>{t('ownerProfile.logout')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionRow}
                            onPress={handleDeleteAccount}
                        >
                            <Text style={styles.deleteText}>{t('ownerProfile.deleteAccount')}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
