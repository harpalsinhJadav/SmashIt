import DateTimePicker from '@react-native-community/datetimepicker';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  XCircle,
} from 'lucide-react-native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useCourtDetail } from './courtdetail.hooks';
import { createStyles } from './courtdetail.style';

export const CourtDetailScreen = () => {
  const {
    court,
    isLoading,
    colors,
    t,
    selectedDate,
    setSelectedDate,
    selectedSlot,
    handleSlotSelect,
    handleBooking,
    handleBack,
    showDatePicker,
    setShowDatePicker,
  } = useCourtDetail();

  const styles = createStyles(colors);

  if (isLoading || !court) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.headerOverlay}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Image source={{ uri: court.image }} style={styles.image} />

        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <Text style={[styles.name, { color: colors.text }]}>
              {court.name}
            </Text>
            <View style={styles.ratingBadge}>
              <Star size={16} color="#FBBF24" fill="#FBBF24" />
              <Text style={styles.ratingText}>{court.rating}</Text>
              <Text style={styles.reviewsText}>({court.reviews})</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <MapPin size={16} color={colors.primary} />
            <Text style={styles.location}>{court.location}</Text>
          </View>

          <View style={styles.gamePriceRow}>
            <View style={styles.gameTag}>
              <Text style={styles.gameText}>{court.game}</Text>
            </View>
            <Text style={styles.priceText}>{court.price}</Text>
          </View>
        </View>

        {/* Facilities */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            {t('courtDetail.facilities')}
          </Text>
          <View style={styles.grid}>
            {court.facilities.map((facility: string) => (
              <View key={facility} style={styles.facilityItem}>
                <CheckCircle2 size={16} color="#059669" />
                <Text style={styles.facilityText}>{facility}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Inclusions & Exclusions */}
        <View style={[styles.section, styles.rowGap16]}>
          <View style={styles.flex1}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {t('courtDetail.inclusions')}
            </Text>
            {court.inclusions.map((item: string) => (
              <View key={item} style={styles.facilityItemFull}>
                <CheckCircle2 size={14} color="#059669" />
                <Text style={styles.smallFacilityText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.flex1}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {t('courtDetail.exclusions')}
            </Text>
            {court.exclusions.map((item: string) => (
              <View key={item} style={styles.facilityItemFull}>
                <XCircle size={14} color="#DC2626" />
                <Text style={styles.smallFacilityText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Date Selection */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <CalendarIcon size={20} color={colors.text} />{' '}
            {t('courtDetail.selectDate')}
          </Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <CalendarIcon size={20} color={colors.primary} />
            <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              minimumDate={new Date()}
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) setSelectedDate(date);
              }}
            />
          )}
        </View>

        {/* Time Slots */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <Clock size={20} color={colors.text} />{' '}
            {t('courtDetail.availableSlots')}
          </Text>
          <View style={styles.slotGrid}>
            {court.timeSlots.map((slot: any) => {
              const isSelected = selectedSlot === slot.time;
              const slotButtonStyle = {
                borderColor: isSelected ? colors.primary : colors.border,
                backgroundColor: isSelected
                  ? colors.surface
                  : slot.available
                  ? colors.background
                  : colors.surface,
                opacity: slot.available ? 1 : 0.5,
              };
              const slotTimeStyle = {
                color: isSelected
                  ? colors.primary
                  : slot.available
                  ? colors.text
                  : colors.textSecondary,
              };

              return (
                <TouchableOpacity
                  key={slot.time}
                  disabled={!slot.available}
                  onPress={() => handleSlotSelect(slot.time)}
                  style={[styles.slotButton, slotButtonStyle]}
                >
                  <Text style={[styles.slotTime, slotTimeStyle]}>
                    {slot.time}
                  </Text>
                  {slot.popular && slot.available && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>
                        {t('courtDetail.popular')}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Policy */}
        <View style={styles.policyCard}>
          <Text style={styles.policyTitle}>
            {t('courtDetail.cancellationPolicy')}
          </Text>
          <Text style={styles.policyText}>
            {t('courtDetail.cancellationText')}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Booking Bar */}
      {selectedSlot && (
        <View style={styles.footer}>
          <View style={styles.footerInfo}>
            <Text style={styles.footerLabel}>
              {t('courtDetail.selectedSlot')}
            </Text>
            <Text style={styles.footerValue}>{selectedSlot}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
            <Text style={styles.bookButtonText}>
              {t('courtDetail.proceedToBook')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};
