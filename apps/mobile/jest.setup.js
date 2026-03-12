/* global jest */
import '@testing-library/jest-native/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    { countryCode: 'IN', languageTag: 'en-IN', languageCode: 'en', isRTL: false },
  ],
  getNumberFormatSettings: () => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  }),
  getCalendar: () => 'gregorian',
  getCountry: () => 'IN',
  getCurrencies: () => ['INR'],
  getTemperatureUnit: () => 'celsius',
  getTimeZone: () => 'Asia/Kolkata',
  uses24HourClock: () => true,
  usesMetricSystem: () => true,
  usesAutoDateAndTime: () => true,
  usesAutoTimeZone: () => true,
}));

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: ({ children }) => children,
      Screen: ({ children }) => children,
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: () => ({
      Navigator: ({ children }) => children,
      Screen: ({ children }) => children,
    }),
  };
});
jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
  };
});

// Mock ALL lucide icons as simple string components
jest.mock('lucide-react-native', () => {
  const mockComponent = (name) => name;
  return new Proxy({}, {
    get: (target, prop) => mockComponent(prop)
  });
});

jest.mock('react-native-chart-kit', () => ({
  BarChart: 'BarChart'
}));

jest.mock('@react-native-community/datetimepicker', () => {
  return () => null;
});

jest.mock('./src/theme', () => ({
  useTheme: () => ({
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6',
      accent: '#9333EA',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      card: '#FFFFFF',
      text: '#000000',
      textSecondary: '#8E8E93',
      textTertiary: '#94A3B8',
      white: '#FFFFFF',
      border: '#C6C6C8',
      error: '#FF3B30',
      success: '#4CD964',
      warning: '#FFCC00',
      textOnPrimary: '#FFFFFF',
      textOnAccent: '#FFFFFF',
      overlay: 'rgba(255, 255, 255, 0.8)',
      successBg: '#ECFDF5',
      successText: '#065F46',
      dangerBg: '#FEF2F2',
      dangerText: '#991B1B',
      warningBg: '#FEF3C7',
      warningText: '#92400E',
      infoBg: '#EFF6FF',
      infoText: '#1D4ED8',
      maintenanceBg: '#FFF7ED',
      maintenanceText: '#C2410C',
      starColor: '#FBBF24',
      revenue: '#059669',
      shadow: '#000',
      statBlue: '#3B82F6',
      statGreen: '#10B981',
      statPurple: '#8B5CF6',
      statOrange: '#F59E0B',
    },
    isDark: false,
  }),
}));

jest.mock('./src/redux/store', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: (selector) => {
    const mockState = {
      player: {
        popularCourts: [],
        upcomingBookings: [],
        bookingHistory: [],
        notifications: [],
        location: 'Mumbai, Maharashtra',
      },
      owner: {
        dashboardData: null,
        courts: [],
        courtDetail: null,
        salesData: null,
        profileData: null,
      },
      app: {
        isLoading: false,
        user: null,
        role: null,
        error: null,
      }
    };
    return selector(mockState);
  },
}));
