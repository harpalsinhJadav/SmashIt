import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scrollView: {
            flex: 1,
        },
        content: {
            padding: 16,
            paddingBottom: 40,
        },
        topSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        filtersRow: {
            flexDirection: 'row',
            gap: 8,
        },
        filterButton: {
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
            borderWidth: 1,
        },
        filterText: {
            fontSize: 14,
            fontFamily: 'Inter-Medium',
            textTransform: 'capitalize',
        },
        exportButton: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
            borderWidth: 1,
        },
        exportText: {
            fontSize: 14,
            fontFamily: 'Inter-Medium',
        },
        statsGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 20,
        },
        statCard: {
            width: '48%',
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
        },
        statIconContainer: {
            width: 40,
            height: 40,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
        },
        statLabel: {
            fontSize: 13,
            fontFamily: 'Inter-Regular',
            marginBottom: 4,
        },
        statValue: {
            fontSize: 18,
            fontFamily: 'Inter-SemiBold',
        },
        chartContainer: {
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            marginBottom: 20,
        },
        sectionTitle: {
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
            marginBottom: 16,
        },
        chartMain: {
            flexDirection: 'row',
            height: 200,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingTop: 10,
        },
        chartBarContainer: {
            alignItems: 'center',
            width: '12%',
        },
        chartBar: {
            width: '100%',
            borderRadius: 4,
        },
        chartLabel: {
            fontSize: 12,
            fontFamily: 'Inter-Regular',
            marginTop: 8,
        },
        listContainer: {
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
        },
        listItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 12,
            borderBottomWidth: 1,
        },
        listItemTitle: {
            fontSize: 15,
            fontFamily: 'Inter-Medium',
            marginBottom: 4,
        },
        listItemSub: {
            fontSize: 13,
            fontFamily: 'Inter-Regular',
        },
        listItemValue: {
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
        },
        loadingContainer: {
            padding: 40,
            alignItems: 'center',
        }
    });
