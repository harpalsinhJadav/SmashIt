import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../../theme';
import {
    useOwnerCourtDetail,
    useUpdateOwnerCourt,
    useAddCourtSlot,
    useUpdateCourtSlot,
    useDeleteCourtSlot,
    useAddAssistant,
    useRemoveAssistant
} from '../../services/ownerQueries';

export const useOwnerCourtManagement = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const courtId = route.params?.id;

    // Modal States
    const [isSlotModalVisible, setSlotModalVisible] = useState(false);
    const [editingSlot, setEditingSlot] = useState<any>(null);
    const [slotForm, setSlotForm] = useState({ time: '', price: '', status: 'available' });

    const [isAssistantModalVisible, setAssistantModalVisible] = useState(false);
    const [assistantForm, setAssistantForm] = useState({ name: '', email: '', assignedCourts: 'This Court' });

    const [activeTab, setActiveTab] = useState<'slots' | 'details' | 'assistants'>('slots');
    const [isDynamic, setIsDynamic] = useState(false);

    const { data: court, isLoading, refetch } = useOwnerCourtDetail(courtId) as { data: any, isLoading: boolean, refetch: () => void };

    // Mutations
    const updateCourtMutation = useUpdateOwnerCourt();
    const addSlotMutation = useAddCourtSlot();
    const updateSlotMutation = useUpdateCourtSlot();
    const deleteSlotMutation = useDeleteCourtSlot();
    const addAssistantMutation = useAddAssistant();
    const removeAssistantMutation = useRemoveAssistant();

    // Editing Court Info Details
    const [courtDetails, setCourtDetails] = useState({
        name: '',
        game: '',
        status: '',
        minDuration: '60',
        maxDuration: '120',
        facilities: 'Parking',
    });

    // Update court details when court data is loaded
    useEffect(() => {
        if (court) {
            setCourtDetails({
                name: court.name || '',
                game: court.game || '',
                status: court.status || '',
                minDuration: court.minDuration || '60',
                maxDuration: court.maxDuration || '120',
                facilities: court.facilities || 'Parking, Water',
            });
            setIsDynamic(court.isDynamic || false);
        }
    }, [court]);

    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleSaveDetails = useCallback(() => {
        updateCourtMutation.mutate({
            id: courtId,
            data: { ...courtDetails, isDynamic }
        });
    }, [courtId, courtDetails, isDynamic, updateCourtMutation]);

    const toggleDynamic = useCallback(() => {
        setIsDynamic(prev => !prev);
    }, []);

    const handleCourtDetailChange = useCallback((key: string, value: string) => {
        setCourtDetails(prev => ({ ...prev, [key]: value }));
    }, []);

    // Slot Handlers
    const openAddSlot = useCallback(() => {
        setEditingSlot(null);
        setSlotForm({ time: '', price: '₹', status: 'available' });
        setSlotModalVisible(true);
    }, []);

    const openEditSlot = useCallback((slot: any) => {
        setEditingSlot(slot);
        setSlotForm({ time: slot.time, price: slot.price, status: slot.status });
        setSlotModalVisible(true);
    }, []);

    const closeSlotModal = useCallback(() => {
        setSlotModalVisible(false);
        setEditingSlot(null);
    }, []);

    const handleSaveSlot = useCallback(() => {
        if (editingSlot) {
            updateSlotMutation.mutate({
                courtId,
                slotId: editingSlot.id,
                slot: slotForm
            }, {
                onSuccess: () => closeSlotModal()
            });
        } else {
            addSlotMutation.mutate({
                courtId,
                slot: slotForm
            }, {
                onSuccess: () => closeSlotModal()
            });
        }
    }, [courtId, editingSlot, slotForm, updateSlotMutation, addSlotMutation, closeSlotModal]);

    const handleDeleteSlot = useCallback(() => {
        if (editingSlot) {
            deleteSlotMutation.mutate({
                courtId,
                slotId: editingSlot.id
            }, {
                onSuccess: () => closeSlotModal()
            });
        }
    }, [courtId, editingSlot, deleteSlotMutation, closeSlotModal]);

    // Assistant Handlers
    const openAddAssistant = useCallback(() => {
        setAssistantForm({ name: '', email: '', assignedCourts: 'This Court' });
        setAssistantModalVisible(true);
    }, []);

    const closeAssistantModal = useCallback(() => {
        setAssistantModalVisible(false);
    }, []);

    const handleSaveAssistant = useCallback(() => {
        addAssistantMutation.mutate({
            courtId,
            assistant: assistantForm
        }, {
            onSuccess: () => closeAssistantModal()
        });
    }, [courtId, assistantForm, addAssistantMutation, closeAssistantModal]);

    const handleRemoveAssistant = useCallback((assistantId: number) => {
        removeAssistantMutation.mutate({ courtId, assistantId });
    }, [courtId, removeAssistantMutation]);

    return {
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
    };
};
