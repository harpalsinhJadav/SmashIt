import {
  CheckCircle2,
  Clock,
  Download,
  MapPin,
  RotateCcw,
  XCircle,
} from 'lucide-react-native';
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
import { useHistoryDetail } from './historydetail.hooks';
import { createStyles } from './historydetail.style';

export const HistoryDetailScreen = () => {
  const {
    booking,
    isLoading,
    colors,
    t,
    handleBack,
    handleDownloadInvoice,
    handleBookAgain,
  } = useHistoryDetail();

  const styles = createStyles(colors);

  if (isLoading || !booking) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const getStatusInfo = () => {
    switch (booking.status) {
      case 'completed':
        return {
          icon: <CheckCircle2 size={40} color={colors.successText} />,
          bg: colors.successBg,
          title: t('historyDetail.completedTitle'),
          desc: t('historyDetail.completedDesc'),
        };
      case 'upcoming':
        return {
          icon: <Clock size={40} color={colors.infoText} />,
          bg: colors.infoBg,
          title: t('historyDetail.upcomingTitle'),
          desc: t('historyDetail.upcomingDesc'),
        };
      case 'cancelled':
        return {
          icon: <XCircle size={40} color={colors.dangerText} />,
          bg: colors.dangerBg,
          title: t('historyDetail.cancelledTitle'),
          desc: t('historyDetail.cancelledDesc'),
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={t('historyDetail.title')}
        showBack={true}
        onBackPress={handleBack}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {statusInfo && (
          <View
            style={[styles.statusBanner, { backgroundColor: statusInfo.bg }]}
          >
            {statusInfo.icon}
            <Text style={[styles.statusTitle, { color: colors.text }]}>
              {statusInfo.title}
            </Text>
            <Text style={[styles.statusDesc, { color: colors.textSecondary }]}>
              {statusInfo.desc}
            </Text>
          </View>
        )}

        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            {t('historyDetail.courtInfo')}
          </Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.courtName')}</Text>
            <Text style={styles.value}>{booking.courtName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.sport')}</Text>
            <Text style={styles.value}>{booking.game}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.location')}</Text>
            <Text style={[styles.value, { color: colors.primary }]}>
              <MapPin size={12} color={colors.primary} /> {booking.location}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            {t('historyDetail.bookingSchedule')}
          </Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.date')}</Text>
            <Text style={styles.value}>{booking.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.timeSlot')}</Text>
            <Text style={styles.value}>{booking.time}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.bookingId')}</Text>
            <Text style={styles.value}>{booking.bookingId}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            {t('historyDetail.paymentDetails')}
          </Text>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.amountPaid')}</Text>
            <Text style={styles.value}>{booking.amount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.method')}</Text>
            <Text style={styles.value}>{booking.paymentMethod}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{t('historyDetail.transactionId')}</Text>
            <Text style={styles.value}>{booking.transactionId}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, { color: colors.text }]}>
              {t('historyDetail.total')}
            </Text>
            <Text style={[styles.totalValue, { color: colors.primary }]}>
              {booking.amount}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} onPress={handleBookAgain}>
            <View style={styles.rowIconLabel}>
              <RotateCcw size={20} color={colors.white} />
              <Text style={styles.primaryBtnText}>
                {t('historyDetail.bookAgain')}
              </Text>
            </View>
          </TouchableOpacity>

          {booking.status === 'completed' && (
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={handleDownloadInvoice}
            >
              <Download size={20} color={colors.primary} />
              <Text style={styles.secondaryBtnText}>
                {t('historyDetail.downloadInvoice')}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
