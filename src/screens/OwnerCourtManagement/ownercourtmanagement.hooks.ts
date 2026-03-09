import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../theme';
import { useOwnerCourtDetail } from '../../services/ownerQueries';

export const useOwnerCourtManagement = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const courtId = route.params?.id;

    // Modal States
    const [isSlotModalVisible, setSlotModalVisible] = useState(false);
    const [editingSlot, setEditingSlot] = useState<any>(null);

    const [isAssistantModalVisible, setAssistantModalVisible] = useState(false);

    const [activeTab, setActiveTab] = useState<'slots' | 'details' | 'assistants'>('slots');
    const [isDynamic, setIsDynamic] = useState(false);

    const { data: court, isLoading, refetch } = useOwnerCourtDetail(courtId) as { data: any, isLoading: boolean, refetch: () => void };

    // Editing Court Info Details
    const [courtDetails, setCourtDetails] = useState({
        name: court?.name || '',
        game: court?.game || '',
        status: court?.status || '',
        minDuration: '60',
        maxDuration: '120',
        facilities: 'Parking',
    });


    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleSave = useCallback(() => {
        console.log('Save Court Details', courtDetails);
    }, [courtDetails]);

    const toggleDynamic = useCallback(() => {
        setIsDynamic(prev => !prev);
    }, []);

    const handleCourtDetailChange = useCallback((key: string, value: string) => {
        setCourtDetails(prev => ({ ...prev, [key]: value }));
    }, []);

    const openAddSlot = useCallback(() => {
        setEditingSlot(null);
        setSlotModalVisible(true);
    }, []);

    const openEditSlot = useCallback((slot: any) => {
        setEditingSlot(slot);
        setSlotModalVisible(true);
    }, []);

    const closeSlotModal = useCallback(() => {
        setSlotModalVisible(false);
        setEditingSlot(null);
    }, []);

    const handleSaveSlot = useCallback(() => {
        console.log('Save Slot');
        closeSlotModal();
    }, [closeSlotModal]);

    const openAddAssistant = useCallback(() => {
        setAssistantModalVisible(true);
    }, []);

    const closeAssistantModal = useCallback(() => {
        setAssistantModalVisible(false);
    }, []);

    const handleSaveAssistant = useCallback(() => {
        console.log('Save Assistant');
        closeAssistantModal();
    }, [closeAssistantModal]);

    return {
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
    };
};
