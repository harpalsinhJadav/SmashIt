import React from 'react';
import { View, Text, ScrollView, RefreshControl, SafeAreaView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Clock, Settings, UserPlus, FileEdit } from 'lucide-react-native';
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
        handleSave,
        isDynamic,
        toggleDynamic,
        courtDetails,
        handleCourtDetailChange,
        isSlotModalVisible,
        editingSlot,
        openAddSlot,
        openEditSlot,
        closeSlotModal,
        handleSaveSlot,
        isAssistantModalVisible,
        openAddAssistant,
        closeAssistantModal,
        handleSaveAssistant,
        refetch,
    } = useOwnerCourtManagement();

    const styles = createStyles(colors);

    const getStatusColor = (status: string) => {
        if (status === 'available') return { bg: '#ECFDF5', text: '#065F46' };
        if (status === 'booked') return { bg: '#EFF6FF', text: '#1D4ED8' };
        if (status === 'maintenance') return { bg: '#FFF7ED', text: '#C2410C' };
        if (status === 'active') return { bg: '#ECFDF5', text: '#065F46' };
        return { bg: '#FEF2F2', text: '#991B1B' };
    };

    if (isLoading && !court) {
        return (
            <SafeAreaView style={styles.container}>
                <AppHeader title={t('ownerCourts.manageCourt')} showBack onBackPress={handleBack} />
                <View style={styles.loadingContainer}>
                    <Text style={{ color: colors.text }}>Loading...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (!court) return null;

    const courtStatusColors = getStatusColor(court.status);

    return (
        <SafeAreaView style={styles.container}>
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
                    {/* Status Badge */}
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
                                style={[styles.statusBadge, { backgroundColor: courtDetails.status === 'active' ? '#ECFDF5' : colors.background }]}
                            >
                                <Text style={[styles.statusBadgeText, { color: courtDetails.status === 'active' ? '#065F46' : colors.textSecondary }]}>
                                    {t('ownerCourtManagement.statusActive')}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleCourtDetailChange('status', 'under_review')}
                                style={[styles.statusBadge, { backgroundColor: courtDetails.status === 'under_review' ? '#FEF3C7' : colors.background }]}
                            >
                                <Text style={[styles.statusBadgeText, { color: courtDetails.status === 'under_review' ? '#92400E' : colors.textSecondary }]}>
                                    {t('ownerCourtManagement.statusUnderReview')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tabs Framework */}
                    <View style={[styles.tabsContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <View style={[styles.tabRow, { borderBottomColor: colors.border }]}>
                            {['slots', 'details', 'assistants'].map((tab) => {
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
                                        onPress={() => setActiveTab(tab as any)}
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
                                        const slotColors = getStatusColor(slot.status);
                                        return (
                                            <View key={slot.id} style={[styles.slotCard, { borderColor: colors.border }]}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.slotTime, { color: colors.text }]}>{slot.time}</Text>
                                                    <Text style={[styles.slotPrice, { color: colors.primary }]}>{slot.price}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <View style={[styles.slotStatusBadge, { backgroundColor: slotColors.bg }]}>
                                                        <Text style={[styles.slotStatusText, { color: slotColors.text }]}>
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
                                        {/* Checkbox mock */}
                                        <View style={{
                                            width: 20, height: 20, borderWidth: 2, borderColor: colors.primary,
                                            backgroundColor: isDynamic ? colors.primary : 'transparent',
                                            borderRadius: 4
                                        }} />
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
                                        onPress={handleSave}
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
                                        <View key={assistant.id} style={[styles.assistantCard, { borderColor: colors.border }]}>
                                            <View style={styles.assistantHeader}>
                                                <View>
                                                    <Text style={[styles.assistantName, { color: colors.text }]}>{assistant.name}</Text>
                                                    <Text style={[styles.assistantEmail, { color: colors.textSecondary }]}>{assistant.email}</Text>
                                                    <Text style={[styles.assistantCourts, { color: colors.primary }]}>{assistant.assignedCourts}</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <Text style={[styles.removeButton, { color: '#DC2626' }]}>
                                                        {t('ownerCourtManagement.assistantsTab.remove')}
                                                    </Text>
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

            <Modal visible={isSlotModalVisible} transparent animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.background, padding: 24, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Inter-SemiBold', color: colors.text, marginBottom: 16 }}>
                            {editingSlot ? t('ownerCourtManagement.slotsTab.editSlot') : t('ownerCourtManagement.slotsTab.addSlot')}
                        </Text>

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.slotTime')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }} defaultValue={editingSlot?.time} />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.slotPrice')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }} defaultValue={editingSlot?.price} />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.slotStatus')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 24, color: colors.text }} defaultValue={editingSlot?.status} />

                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={{ flex: 1, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 8, alignItems: 'center' }} onPress={closeSlotModal}>
                                <Text style={{ color: colors.text, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, padding: 14, backgroundColor: colors.primary, borderRadius: 8, alignItems: 'center' }} onPress={handleSaveSlot}>
                                <Text style={{ color: colors.white, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.saveSlot')}</Text>
                            </TouchableOpacity>
                        </View>

                        {editingSlot && (
                            <TouchableOpacity style={{ padding: 14, alignItems: 'center', marginTop: 12 }} onPress={closeSlotModal}>
                                <Text style={{ color: '#DC2626', fontFamily: 'Inter-SemiBold' }}>{t('ownerCourtManagement.slotsTab.deleteSlot')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>

            <Modal visible={isAssistantModalVisible} transparent animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: colors.background, padding: 24, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Inter-SemiBold', color: colors.text, marginBottom: 16 }}>
                            {t('ownerCourtManagement.assistantsTab.addAssistant')}
                        </Text>

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.assistantsTab.assistantName')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }} />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.assistantsTab.assistantEmail')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 16, color: colors.text }} />

                        <Text style={{ color: colors.textSecondary, marginBottom: 8, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.assistantsTab.assignedCourts')}</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: colors.border, padding: 12, borderRadius: 8, marginBottom: 24, color: colors.text }} />

                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={{ flex: 1, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 8, alignItems: 'center' }} onPress={closeAssistantModal}>
                                <Text style={{ color: colors.text, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.slotsTab.cancel')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, padding: 14, backgroundColor: colors.primary, borderRadius: 8, alignItems: 'center' }} onPress={handleSaveAssistant}>
                                <Text style={{ color: colors.white, fontFamily: 'Inter-Medium' }}>{t('ownerCourtManagement.assistantsTab.saveAssistant')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};
