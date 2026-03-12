import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { useReviewBooking } from './reviewbooking.hooks';
import { createStyles } from './reviewbooking.style';

export const ReviewBookingScreen = () => {
  const {
    t,
    colors,
    court,
    slot,
    date,
    price,
    isLoading,
    handleConfirm,
    handleBack,
  } = useReviewBooking();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('booking.reviewBooking')}
        showBack={true}
        onBackPress={handleBack}
      />

      <ScrollView style={styles.content}>
        {/* Court Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('courtDetail.courtInfo')}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.courtName')}</Text>
            <Text style={styles.value}>{court?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.location')}</Text>
            <Text style={styles.value}>{court?.location}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.sport')}</Text>
            <Text style={styles.value}>{court?.game}</Text>
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('historyDetail.bookingSchedule')}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.date')}</Text>
            <Text style={styles.value}>{new Date(date).toLocaleDateString()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.timeSlot')}</Text>
            <Text style={styles.value}>{slot}</Text>
          </View>
        </View>

        {/* Price Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('historyDetail.paymentDetails')}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('courtDetail.pricePerSlot')}</Text>
            <Text style={styles.value}>₹{price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('courtDetail.taxFees')}</Text>
            <Text style={styles.value}>₹0</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>{t('historyDetail.total')}</Text>
            <Text style={styles.totalValue}>₹{price}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.confirmButton, isLoading && { opacity: 0.7 }]}
          onPress={handleConfirm}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <Text style={styles.confirmButtonText}>
              {t('courtDetail.confirmBooking')}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
