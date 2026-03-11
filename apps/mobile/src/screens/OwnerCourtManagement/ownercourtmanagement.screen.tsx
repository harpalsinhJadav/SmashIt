import React from 'react';
import { View, Text, ScrollView, RefreshControl, SafeAreaView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Clock, Settings, UserPlus, FileEdit, Trash2, X } from 'lucide-react-native';
import { useOwnerCourtManagement } from './ownercourtmanagement.hooks';
import { createStyles } from './ownercourtmanagement.style';
import { AppHeader } from '../../components/AppHeader';

export const OwnerCourtManagementScreen = () => {
    const {
        t,
        colors,
        court,
        isLoading,
        activeTab,
        setActiveTab,
        handleBack,
        handleSaveDetails,
        isDynamic,
        toggleDynamic,
        courtDetails,
        handleCourtDetailChange,
        isSlotModalVisible,
        editingSlot,
        slotForm,
        setSlotForm,
        openAddSlot,
        openEditSlot,
        closeSlotModal,
        handleSaveSlot,
        handleDeleteSlot,
        isAssistantModalVisible,
        assistantForm,
        setAssistantForm,
        openAddAssistant,
        closeAssistantModal,
        handleSaveAssistant,
        handleRemoveAssistant,
        refetch,
    } = useOwnerCourtManagement();

    const styles = createStyles(colors);

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'available':
            case 'active':
                return { bg: colors.successBg, text: colors.successText };
            case 'booked':
                return { bg: colors.infoBg, text: colors.infoText };
            case 'maintenance':
                return { bg: colors.maintenanceBg, text: colors.maintenanceText };
            case 'under_review':
                return { bg: colors.warningBg, text: colors.warningText };
            default:
                return { bg: colors.dangerBg, text: colors.dangerText };
        }
    };

    if (isLoading && !court) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
                <AppHeader title={t('ownerCourts.manageCourt')} showBack onBackPress={handleBack} />
                <View style={styles.loadingContainer}>
                    <Text style={{ color: colors.text }}>Loading...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (!court) return null;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <AppHeader
                title={court.name}
                showBack
                onBackPress={handleBack}
                showLogo={false}
            />

            <ScrollView
                style={styles.scrollView}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />}
            >
                <View style={styles.content}>
                    {/* Status Toggle Card */}
                    <View style={[styles.statusCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <View>
                            <Text style={[styles.gameTitle, { color: colors.text }]}>{courtDetails.game || court.game}</Text>
                            <Text style={[styles.statusLabel, { color: colors.textSecondary }]}>
                                {t('ownerCourtManagement.courtStatus')}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <TouchableOpacity
                                onPress={() => handleCourtDetailChange('status', 'active')}
                                style={[
                                    styles.statusBadge,
                                    { backgroundColor: courtDetails.status === 'active' ? colors.successBg : colors.background }
                                ]}
                            >
                                <Text style={[
                                    styles.statusBadgeText,
                                    { color: courtDetails.status === 'active' ? colors.successText : colors.textSecondary }
                                ]}>
                                    {t('ownerCourtManagement.statusActive')}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleCourtDetailChange('status', 'under_review')}
                                style={[
                                    styles.statusBadge,
                                    { backgroundColor: courtDetails.status === 'under_review' ? colors.warningBg : colors.background }
                                ]}
                            >
                                <Text style={[
                                    styles.statusBadgeText,
                                    { color: courtDetails.status === 'under_review' ? colors.warningText : colors.textSecondary }
                                ]}>
                                    {t('ownerCourtManagement.statusUnderReview')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tabs Framework */}
                    <View style={[styles.tabsContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <View style={[styles.tabRow, { borderBottomColor: colors.border }]}>
                            {(['slots', 'details', 'assistants'] as const).map((tab) => {
                                const isActive = activeTab === tab;
                                return (
                                    <TouchableOpacity
                                        key={tab}
                                        style={[
                                            styles.tabButton,
                                            {
                                                borderBottomColor: isActive ? colors.primary : 'transparent',
                                                backgroundColor: isActive ? `${colors.primary}10` : 'transparent',
                                            }
                                        ]}
                                        onPress={() => setActiveTab(tab)}
                                    >
                                        <Text style={[
                                            styles.tabButtonText,
                                            { color: isActive ? colors.primary : colors.textSecondary }
                                        ]}>
                                            {t(`ownerCourtManagement.tabs.${tab}` as any)}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <View style={styles.tabContent}>
                            {/* Slots Tab */}
                            {activeTab === 'slots' && (
                                <View>
                                    <View style={styles.sectionHeader}>
                                        <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                            {t('ownerCourtManagement.slotsTab.title')}
                                        </Text>
                                        <TouchableOpacity
                                            style={[styles.addSlotButton, { backgroundColor: colors.primary }]}
                                            onPress={openAddSlot}
                                        >
                                            <Clock size={14} color={colors.white} />
                                            <Text style={[styles.addSlotText, { color: colors.white }]}>
                                                {t('ownerCourtManagement.slotsTab.addSlot')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {court.slots?.map((slot: any) => {
                                        const slotStyles = getStatusStyles(slot.status);
                                        return (
                                            <View key={slot.id} style={[styles.slotCard, { borderColor: colors.border }]}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.slotTime, { color: colors.text }]}>{slot.time}</Text>
                                                    <Text style={[styles.slotPrice, { color: colors.primary }]}>{slot.price}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                                                    <View style={[styles.slotStatusBadge, { backgroundColor: slotStyles.bg }]}>
                                                        <Text style={[styles.slotStatusText, { color: slotStyles.text }]}>
                                                            {slot.status}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity style={{ padding: 4 }} onPress={() => openEditSlot(slot)}>
                                                        <Settings size={18} color={colors.textSecondary} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        );
                                    })}

                                    <TouchableOpacity
                                        style={[styles.addMoreSlotsButton, { borderColor: colors.border }]}
                                        onPress={openAddSlot}
                                    >
                                        <Text style={[styles.addMoreSlotsText, { color: colors.textSecondary }]}>
                                            {t('ownerCourtManagement.slotsTab.addMoreSlots')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            {/* Details Tab */}
                            {activeTab === 'details' && (
                                <View>
                                    <View style={styles.inputGroup}>
                                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                            {t('ownerCourtManagement.detailsTab.courtName')}
                                        </Text>
                                        <TextInput
                                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                            value={courtDetails.name}
                                            onChangeText={(val) => handleCourtDetailChange('name', val)}
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                            {t('ownerCourtManagement.detailsTab.gameType')}
                                        </Text>
                                        <TextInput
                                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                            value={courtDetails.game}
                                            onChangeText={(val) => handleCourtDetailChange('game', val)}
                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row', gap: 12 }}>
                                        <View style={[styles.inputGroup, { flex: 1 }]}>
                                            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                                {t('ownerCourtManagement.detailsTab.minDuration')}
                                            </Text>
                                            <TextInput
                                                style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                                value={courtDetails.minDuration}
                                                onChangeText={(val) => handleCourtDetailChange('minDuration', val)}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                        <View style={[styles.inputGroup, { flex: 1 }]}>
                                            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                                {t('ownerCourtManagement.detailsTab.maxDuration')}
                                            </Text>
                                            <TextInput
                                                style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                                value={courtDetails.maxDuration}
                                                onChangeText={(val) => handleCourtDetailChange('maxDuration', val)}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>

                                    <TouchableOpacity style={styles.checkboxRow} onPress={toggleDynamic} activeOpacity={0.8}>
                                        <View style={{
                                            width: 20, height: 20, borderWidth: 2, borderColor: colors.primary,
                                            backgroundColor: isDynamic ? colors.primary : 'transparent',
                                            borderRadius: 4, justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            {isDynamic && <X size={14} color={colors.white} strokeWidth={3} />}
                                        </View>
                                        <Text style={[styles.checkboxLabel, { color: colors.text }]}>
                                            {t('ownerCourtManagement.detailsTab.allowDynamic')}
                                        </Text>
                                    </TouchableOpacity>

                                    <View style={styles.inputGroup}>
                                        <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>
                                            {t('ownerCourtManagement.detailsTab.facilities')}
                                        </Text>
                                        <TextInput
                                            style={[styles.input, { borderColor: colors.border, color: colors.text }]}
                                            value={courtDetails.facilities}
                                            onChangeText={(val) => handleCourtDetailChange('facilities', val)}
                                        />
                                    </View>

                                    <TouchableOpacity
                                        style={[styles.saveButton, { backgroundColor: colors.primary }]}
                                        onPress={handleSaveDetails}
                                    >
                                        <Text style={[styles.saveButtonText, { color: colors.white }]}>
                                            {t('ownerCourtManagement.detailsTab.saveChanges')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            {/* Assistants Tab */}
                            {activeTab === 'assistants' && (
                                <View>
                                    <View style={styles.sectionHeader}>
                                        <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                            {t('ownerCourtManagement.assistantsTab.title')}
                                        </Text>
                                        <TouchableOpacity
                                            style={[styles.addSlotButton, { backgroundColor: colors.primary }]}
                                            onPress={openAddAssistant}
                                        >
                                            <UserPlus size={14} color={colors.white} />
                                            <Text style={[styles.addSlotText, { color: colors.white }]}>
                                                {t('ownerCourtManagement.assistantsTab.addAssistant')}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {court.assistants?.map((assistant: any) => (
                                        <View key={assistant.id} style={[styles.assistantCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                                            <View style={styles.assistantHeader}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.assistantName, { color: colors.text }]}>{assistant.name}</Text>
                                                    <Text style={[styles.assistantEmail, { color: colors.textSecondary }]}>{assistant.email}</Text>
                                                    <View style={[styles.assistantBadge, { backgroundColor: colors.accent + '20' }]}>
                                                        <Text style={[styles.assistantCourts, { color: colors.accent }]}>
                                                            {assistant.assignedCourts}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity onPress={() => handleRemoveAssistant(assistant.id)}>
                                                    <Trash2 size={20} color={colors.error} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Slot Modal */}
            <Modal visible={isSlotModalVisible} transparent animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.background, padding: 24, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text }}>
                                {editingSlot ? t('ownerCourtManagement.slotsTab.editSlot') : t('ownerCourtManagement.slotsTab.addSlot')}
                            </Text>
                            <TouchableOpacity onPress={closeSlotModal}>
                                <X size={24} color={colors.textSecondary} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.slotTime')}</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }}
                            value={slotForm.time}
                            onChangeText={(val) => setSlotForm(prev => ({ ...prev, time: val }))}
                            placeholder="e.g. 6:00 AM - 7:00 AM"
                            placeholderTextColor={colors.textTertiary}
                        />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.slotPrice')}</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }}
                            value={slotForm.price}
                            onChangeText={(val) => setSlotForm(prev => ({ ...prev, price: val }))}
                            placeholder="e.g. ₹500"
                            placeholderTextColor={colors.textTertiary}
                        />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.slotStatus')}</Text>
                        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 24 }}>
                            {['available', 'booked', 'maintenance'].map((s) => (
                                <TouchableOpacity
                                    key={s}
                                    style={{
                                        paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20,
                                        backgroundColor: slotForm.status === s ? colors.primary : colors.surface,
                                        borderWidth: 1, borderColor: colors.border
                                    }}
                                    onPress={() => setSlotForm(prev => ({ ...prev, status: s }))}
                                >
                                    <Text style={{ color: slotForm.status === s ? colors.white : colors.textSecondary, fontSize: 12 }}>{s}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={{ flex: 1, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 8, alignItems: 'center' }} onPress={closeSlotModal}>
                                <Text style={{ color: colors.text, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, padding: 14, backgroundColor: colors.primary, borderRadius: 8, alignItems: 'center' }} onPress={handleSaveSlot}>
                                <Text style={{ color: colors.white, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.saveSlot')}</Text>
                            </TouchableOpacity>
                        </View>

                        {editingSlot && (
                            <TouchableOpacity style={{ padding: 14, alignItems: 'center', marginTop: 12, flexDirection: 'row', justifyContent: 'center', gap: 8 }} onPress={handleDeleteSlot}>
                                <Trash2 size={16} color={colors.error} />
                                <Text style={{ color: colors.error, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.deleteSlot')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>

            {/* Assistant Modal */}
            <Modal visible={isAssistantModalVisible} transparent animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.background, padding: 24, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text }}>
                                {t('ownerCourtManagement.assistantsTab.addAssistant')}
                            </Text>
                            <TouchableOpacity onPress={closeAssistantModal}>
                                <X size={24} color={colors.textSecondary} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.assistantsTab.assistantName')}</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }}
                            value={assistantForm.name}
                            onChangeText={(val) => setAssistantForm(prev => ({ ...prev, name: val }))}
                        />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.assistantsTab.assistantEmail')}</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }}
                            value={assistantForm.email}
                            onChangeText={(val) => setAssistantForm(prev => ({ ...prev, email: val }))}
                        />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontWeight: '600' }}>{t('ownerCourtManagement.assistantsTab.assignedCourts')}</Text>
                        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
                            {['This Court', 'All Courts'].map((p) => (
                                <TouchableOpacity
                                    key={p}
                                    style={{
                                        flex: 1, padding: 12, borderRadius: 8, alignItems: 'center',
                                        backgroundColor: assistantForm.assignedCourts === p ? colors.primary : colors.surface,
                                        borderWidth: 1, borderColor: colors.border
                                    }}
                                    onPress={() => setAssistantForm(prev => ({ ...prev, assignedCourts: p }))}
                                >
                                    <Text style={{ color: assistantForm.assignedCourts === p ? colors.white : colors.textSecondary }}>{p}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={{ flex: 1, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 8, alignItems: 'center' }} onPress={closeAssistantModal}>
                                <Text style={{ color: colors.text, fontWeight: '600' }}>{t('ownerCourtManagement.slotsTab.cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, padding: 14, backgroundColor: colors.primary, borderRadius: 8, alignItems: 'center' }} onPress={handleSaveAssistant}>
                                <Text style={{ color: colors.white, fontWeight: '600' }}>{t('ownerCourtManagement.assistantsTab.saveAssistant')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};
