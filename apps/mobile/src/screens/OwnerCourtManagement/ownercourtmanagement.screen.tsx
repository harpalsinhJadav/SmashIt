import { Clock, Settings, Trash2, UserPlus, X } from 'lucide-react-native';
import React from 'react';
import {
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { useOwnerCourtManagement } from './ownercourtmanagement.hooks';
import { createStyles } from './ownercourtmanagement.style';

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
      <SafeAreaView style={styles.container}>
        <AppHeader
          title={t('ownerCourts.manageCourt')}
          showBack
          onBackPress={handleBack}
        />
        <View style={styles.loadingContainer}>
          <Text style={styles.statusLabel}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!court) return null;

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
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      >
        <View style={styles.content}>
          {/* Status Toggle Card */}
          <View style={styles.statusCard}>
            <View>
              <Text style={styles.gameTitle}>
                {courtDetails.game || court.game}
              </Text>
              <Text style={styles.statusLabel}>
                {t('ownerCourtManagement.courtStatus')}
              </Text>
            </View>
            <View style={styles.rowGap8}>
              <TouchableOpacity
                onPress={() => handleCourtDetailChange('status', 'active')}
                style={[
                  styles.statusBadge,
                  courtDetails.status === 'active'
                    ? styles.statusBadgeActive
                    : styles.statusBadgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.statusBadgeText,
                    courtDetails.status === 'active'
                      ? styles.statusTextActive
                      : styles.statusTextInactive,
                  ]}
                >
                  {t('ownerCourtManagement.statusActive')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleCourtDetailChange('status', 'under_review')
                }
                style={[
                  styles.statusBadge,
                  courtDetails.status === 'under_review'
                    ? styles.statusBadgeWarning
                    : styles.statusBadgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.statusBadgeText,
                    courtDetails.status === 'under_review'
                      ? styles.statusTextWarning
                      : styles.statusTextInactive,
                  ]}
                >
                  {t('ownerCourtManagement.statusUnderReview')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tabs Framework */}
          <View style={styles.tabsContainer}>
            <View style={styles.tabRow}>
              {(['slots', 'details', 'assistants'] as const).map(tab => {
                const isActive = activeTab === tab;
                return (
                  <TouchableOpacity
                    key={tab}
                    style={[
                      styles.tabButton,
                      isActive && {
                        borderBottomColor: colors.primary,
                        backgroundColor: `${colors.primary}10`,
                      },
                    ]}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text
                      style={[
                        styles.tabButtonText,
                        {
                          color: isActive
                            ? colors.primary
                            : colors.textSecondary,
                        },
                      ]}
                    >
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
                    <Text style={styles.sectionTitle}>
                      {t('ownerCourtManagement.slotsTab.title')}
                    </Text>
                    <TouchableOpacity
                      style={styles.addSlotButton}
                      onPress={openAddSlot}
                    >
                      <Clock size={14} color={colors.white} />
                      <Text style={styles.addSlotText}>
                        {t('ownerCourtManagement.slotsTab.addSlot')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {court.slots?.map((slot: any) => {
                    const slotStyles = getStatusStyles(slot.status);
                    return (
                      <View key={slot.id} style={styles.slotCard}>
                        <View style={styles.flex1}>
                          <Text style={styles.slotTime}>{slot.time}</Text>
                          <Text style={styles.slotPrice}>{slot.price}</Text>
                        </View>
                        <View style={styles.rowGap12}>
                          <View
                            style={[
                              styles.slotStatusBadge,
                              { backgroundColor: slotStyles.bg },
                            ]}
                          >
                            <Text
                              style={[
                                styles.slotStatusText,
                                { color: slotStyles.text },
                              ]}
                            >
                              {slot.status}
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={styles.padding4}
                            onPress={() => openEditSlot(slot)}
                          >
                            <Settings size={18} color={colors.textSecondary} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}

                  <TouchableOpacity
                    style={styles.addMoreSlotsButton}
                    onPress={openAddSlot}
                  >
                    <Text style={styles.addMoreSlotsText}>
                      {t('ownerCourtManagement.slotsTab.addMoreSlots')}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Details Tab */}
              {activeTab === 'details' && (
                <View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>
                      {t('ownerCourtManagement.detailsTab.courtName')}
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={courtDetails.name}
                      onChangeText={val => handleCourtDetailChange('name', val)}
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>
                      {t('ownerCourtManagement.detailsTab.gameType')}
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={courtDetails.game}
                      onChangeText={val => handleCourtDetailChange('game', val)}
                    />
                  </View>

                  <View style={styles.rowGap12}>
                    <View style={[styles.inputGroup, styles.flex1]}>
                      <Text style={styles.inputLabel}>
                        {t('ownerCourtManagement.detailsTab.minDuration')}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={courtDetails.minDuration}
                        onChangeText={val =>
                          handleCourtDetailChange('minDuration', val)
                        }
                        keyboardType="numeric"
                      />
                    </View>
                    <View style={[styles.inputGroup, styles.flex1]}>
                      <Text style={styles.inputLabel}>
                        {t('ownerCourtManagement.detailsTab.maxDuration')}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={courtDetails.maxDuration}
                        onChangeText={val =>
                          handleCourtDetailChange('maxDuration', val)
                        }
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
                        isDynamic && styles.checkboxActive,
                      ]}
                    >
                      {isDynamic && (
                        <X size={14} color={colors.white} strokeWidth={3} />
                      )}
                    </View>
                    <Text style={styles.checkboxLabel}>
                      {t('ownerCourtManagement.detailsTab.allowDynamic')}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>
                      {t('ownerCourtManagement.detailsTab.facilities')}
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={courtDetails.facilities}
                      onChangeText={val =>
                        handleCourtDetailChange('facilities', val)
                      }
                    />
                  </View>

                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSaveDetails}
                  >
                    <Text style={styles.saveButtonText}>
                      {t('ownerCourtManagement.detailsTab.saveChanges')}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Assistants Tab */}
              {activeTab === 'assistants' && (
                <View>
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                      {t('ownerCourtManagement.assistantsTab.title')}
                    </Text>
                    <TouchableOpacity
                      style={styles.addSlotButton}
                      onPress={openAddAssistant}
                    >
                      <UserPlus size={14} color={colors.white} />
                      <Text style={styles.addSlotText}>
                        {t('ownerCourtManagement.assistantsTab.addAssistant')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {court.assistants?.map((assistant: any) => (
                    <View key={assistant.id} style={styles.assistantCard}>
                      <View style={styles.assistantHeader}>
                        <View style={styles.flex1}>
                          <Text style={styles.assistantName}>
                            {assistant.name}
                          </Text>
                          <Text style={styles.assistantEmail}>
                            {assistant.email}
                          </Text>
                          <View style={styles.assistantBadge}>
                            <Text style={styles.assistantCourts}>
                              {assistant.assignedCourts}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          onPress={() => handleRemoveAssistant(assistant.id)}
                        >
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
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {editingSlot
                  ? t('ownerCourtManagement.slotsTab.editSlot')
                  : t('ownerCourtManagement.slotsTab.addSlot')}
              </Text>
              <TouchableOpacity onPress={closeSlotModal}>
                <X size={24} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.slotsTab.slotTime')}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={slotForm.time}
              onChangeText={val =>
                setSlotForm(prev => ({ ...prev, time: val }))
              }
              placeholder="e.g. 6:00 AM - 7:00 AM"
              placeholderTextColor={colors.textTertiary}
            />

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.slotsTab.slotPrice')}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={slotForm.price}
              onChangeText={val =>
                setSlotForm(prev => ({ ...prev, price: val }))
              }
              placeholder="e.g. ₹500"
              placeholderTextColor={colors.textTertiary}
            />

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.slotsTab.slotStatus')}
            </Text>
            <View style={styles.modalChipRow}>
              {['available', 'booked', 'maintenance'].map(s => (
                <TouchableOpacity
                  key={s}
                  style={[
                    styles.modalChip,
                    slotForm.status === s && styles.modalChipActive,
                  ]}
                  onPress={() => setSlotForm(prev => ({ ...prev, status: s }))}
                >
                  <Text
                    style={[
                      styles.modalChipText,
                      slotForm.status === s && styles.modalChipTextActive,
                    ]}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={closeSlotModal}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  {t('ownerCourtManagement.slotsTab.cancel')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalSaveButton]}
                onPress={handleSaveSlot}
              >
                <Text style={[styles.modalButtonText, { color: colors.white }]}>
                  {t('ownerCourtManagement.slotsTab.saveSlot')}
                </Text>
              </TouchableOpacity>
            </View>

            {editingSlot && (
              <TouchableOpacity
                style={styles.modalDeleteButton}
                onPress={handleDeleteSlot}
              >
                <Trash2 size={16} color={colors.error} />
                <Text style={[styles.modalDeleteText, { color: colors.error }]}>
                  {t('ownerCourtManagement.slotsTab.deleteSlot')}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>

      {/* Assistant Modal */}
      <Modal
        visible={isAssistantModalVisible}
        transparent
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {t('ownerCourtManagement.assistantsTab.addAssistant')}
              </Text>
              <TouchableOpacity onPress={closeAssistantModal}>
                <X size={24} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.assistantsTab.assistantName')}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={assistantForm.name}
              onChangeText={val =>
                setAssistantForm(prev => ({ ...prev, name: val }))
              }
            />

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.assistantsTab.assistantEmail')}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={assistantForm.email}
              onChangeText={val =>
                setAssistantForm(prev => ({ ...prev, email: val }))
              }
            />

            <Text style={styles.modalLabel}>
              {t('ownerCourtManagement.assistantsTab.assignedCourts')}
            </Text>
            <View style={styles.modalFooter}>
              {['This Court', 'All Courts'].map(p => (
                <TouchableOpacity
                  key={p}
                  style={[
                    styles.modalButton,
                    assistantForm.assignedCourts === p
                      ? styles.modalSaveButton
                      : styles.modalCancelButton,
                  ]}
                  onPress={() =>
                    setAssistantForm(prev => ({ ...prev, assignedCourts: p }))
                  }
                >
                  <Text
                    style={[
                      styles.modalButtonText,
                      {
                        color:
                          assistantForm.assignedCourts === p
                            ? colors.white
                            : colors.textSecondary,
                      },
                    ]}
                  >
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.modalFooter, styles.mb12]}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={closeAssistantModal}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  {t('ownerCourtManagement.slotsTab.cancel')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalSaveButton]}
                onPress={handleSaveAssistant}
              >
                <Text style={[styles.modalButtonText, { color: colors.white }]}>
                  {t('ownerCourtManagement.assistantsTab.saveAssistant')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
