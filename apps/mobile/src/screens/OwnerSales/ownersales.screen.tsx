import React from 'react';
import { View, Text, ScrollView, RefreshControl, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Download, DollarSign, Calendar, Users, TrendingUp } from 'lucide-react-native';
import { useOwnerSalesScreen } from './ownersales.hooks';
import { createStyles } from './ownersales.style';
import { AppHeader } from '../../components/AppHeader';

export const OwnerSalesScreen = () => {
    const {
        t,
        colors,
        filter,
        setFilter,
        salesData,
        isLoading,
        refetch,
        handleNotifications,
        handleExport,
    } = useOwnerSalesScreen();

    const styles = createStyles(colors);

    // Icon mapping
    const getIcon = (labelKey: string) => {
        switch (labelKey) {
            case 'totalRevenue': return DollarSign;
            case 'totalBookings': return Calendar;
            case 'activePlayers': return Users;
            case 'avgBookingValue': return TrendingUp;
            default: return DollarSign;
        }
    };

    const maxChartValue = salesData?.chartData ? Math.max(...salesData.chartData.map((d: any) => d.revenue)) : 100;

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader
                title={t('ownerSales.title')}
                showBack={false}
                showLogo={false}
                onNotificationPress={handleNotifications}
            />

            <ScrollView
                style={styles.scrollView}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={colors.primary} />}
            >
                <View style={styles.content}>

                    {/* Filter & Export Row */}
                    <View style={styles.topSection}>
                        <View style={styles.filtersRow}>
                            {['week', 'month', 'year'].map((f) => {
                                const isActive = filter === f;
                                return (
                                    <TouchableOpacity
                                        key={f}
                                        style={[
                                            styles.filterButton,
                                            {
                                                backgroundColor: isActive ? colors.primary : colors.surface,
                                                borderColor: isActive ? colors.primary : colors.border
                                            }
                                        ]}
                                        onPress={() => setFilter(f as any)}
                                    >
                                        <Text style={[styles.filterText, { color: isActive ? colors.white : colors.text }]}>
                                            {t(`ownerSales.${f}` as any)}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <TouchableOpacity
                            style={[styles.exportButton, { backgroundColor: colors.surface, borderColor: colors.border }]}
                            onPress={handleExport}
                        >
                            <Download size={16} color={colors.textSecondary} />
                            <Text style={[styles.exportText, { color: colors.textSecondary }]}>{t('ownerSales.export')}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Loading State or Data Display */}
                    {isLoading && !salesData ? (
                        <View style={styles.loadingContainer}>
                            <Text style={{ color: colors.textSecondary }}>Loading data...</Text>
                        </View>
                    ) : (
                        <>
                            {/* Stats Grid */}
                            <View style={styles.statsGrid}>
                                {salesData?.stats?.map((stat: any) => {
                                    const Icon = getIcon(stat.label);
                                    return (
                                        <View key={stat.label} style={[styles.statCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                                            <View style={[styles.statIconContainer, { backgroundColor: `${stat.color}15` }]}>
                                                <Icon size={20} color={stat.color} />
                                            </View>
                                            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                                                {t(`ownerSales.stats.${stat.label}` as any)}
                                            </Text>
                                            <Text style={[styles.statValue, { color: colors.text }]}>
                                                {stat.value}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>

                            <View style={[styles.chartContainer, { backgroundColor: colors.surface, borderColor: colors.border, paddingRight: 0 }]}>
                                <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('ownerSales.revenueTrend')}</Text>

                                {salesData?.chartData?.length > 0 && (
                                    <BarChart
                                        data={{
                                            labels: salesData.chartData.map((d: any) => d.name),
                                            datasets: [
                                                {
                                                    data: salesData.chartData.map((d: any) => d.revenue)
                                                }
                                            ]
                                        }}
                                        width={Dimensions.get('window').width - 64} // padding adjustment
                                        height={220}
                                        yAxisLabel="₹"
                                        yAxisSuffix=""
                                        chartConfig={{
                                            backgroundColor: colors.surface,
                                            backgroundGradientFrom: colors.surface,
                                            backgroundGradientTo: colors.surface,
                                            decimalPlaces: 0,
                                            color: (opacity = 1) => colors.primary,
                                            labelColor: (opacity = 1) => colors.textSecondary,
                                            style: {
                                                borderRadius: 16
                                            },
                                            barPercentage: 0.6,
                                        }}
                                        style={{
                                            marginVertical: 8,
                                            borderRadius: 16
                                        }}
                                        withInnerLines={false}
                                        showValuesOnTopOfBars
                                    />
                                )}
                            </View>

                            {/* Court-wise Performance */}
                            <View style={[styles.listContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                                <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('ownerSales.courtWisePerformance')}</Text>

                                {salesData?.courtWiseSales?.map((courtData: any, index: number) => {
                                    const isLast = index === salesData.courtWiseSales.length - 1;
                                    return (
                                        <View
                                            key={index}
                                            style={[
                                                styles.listItem,
                                                { borderBottomColor: isLast ? 'transparent' : colors.border }
                                            ]}
                                        >
                                            <View>
                                                <Text style={[styles.listItemTitle, { color: colors.text }]}>{courtData.court}</Text>
                                                <Text style={[styles.listItemSub, { color: colors.textSecondary }]}>
                                                    {courtData.bookings} {t('ownerSales.bookings')}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.listItemValue, { color: '#16a34a' }]}>{courtData.revenue}</Text>
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        </>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
