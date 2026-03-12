import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Bell,
  Calendar,
  DollarSign,
  Home,
  LayoutDashboard,
  User,
} from 'lucide-react-native';
import React from 'react';

import { useAppSelector } from '../redux/store';
import { AdminScreen } from '../screens/Admin/admin.screen';
import { BookingScreen } from '../screens/Booking/booking.screen';
import { CourtDetailScreen } from '../screens/CourtDetail/courtdetail.screen';
import { HistoryScreen } from '../screens/History/history.screen';
import { HistoryDetailScreen } from '../screens/HistoryDetail/historydetail.screen';
import { HomeScreen } from '../screens/Home/home.screen';
import { LoginScreen } from '../screens/Login/login.screen';
import { NotificationsScreen } from '../screens/Notifications/notifications.screen';
import { OwnerAddCourtScreen } from '../screens/OwnerAddCourt/owneraddcourt.screen';
import { OwnerCourtManagementScreen } from '../screens/OwnerCourtManagement/ownercourtmanagement.screen';
import { OwnerCourtsScreen } from '../screens/OwnerCourts/ownercourts.screen';
import { OwnerDashboardScreen } from '../screens/OwnerDashboard/ownerdashboard.screen';
import { OwnerProfileScreen } from '../screens/OwnerProfile/ownerprofile.screen';
import { OwnerSalesScreen } from '../screens/OwnerSales/ownersales.screen';
import { ProfileScreen } from '../screens/Profile/profile.screen';
import { SignupScreen } from '../screens/Signup/signup.screen';
import { useTheme } from '../theme';
import {
  AdminStackParamList,
  AuthStackParamList,
  PlayerStackParamList,
  RootStackParamList,
} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AdminStack = createNativeStackNavigator<AdminStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const PlayerStack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator<PlayerStackParamList>();

const OwnerStack = createNativeStackNavigator<any>();
const OwnerTab = createBottomTabNavigator<any>();

const getOwnerTabBarIcon =
  (route: any) =>
  ({ color, size }: { color: string; size: number }) => {
    if (route.name === 'OwnerDashboard')
      return <LayoutDashboard color={color} size={size} />;
    if (route.name === 'OwnerCourts')
      return <Calendar color={color} size={size} />;
    if (route.name === 'OwnerSales')
      return <DollarSign color={color} size={size} />;
    if (route.name === 'OwnerProfile')
      return <User color={color} size={size} />;
    return <Home color={color} size={size} />;
  };

const getPlayerTabBarIcon =
  (route: any) =>
  ({ color, size }: { color: string; size: number }) => {
    if (route.name === 'PlayerHome') return <Home color={color} size={size} />;
    if (route.name === 'Booking') return <Calendar color={color} size={size} />;
    if (route.name === 'History')
      return <LayoutDashboard color={color} size={size} />;
    if (route.name === 'Notifications')
      return <Bell color={color} size={size} />;
    if (route.name === 'Profile') return <User color={color} size={size} />;
    return <Home color={color} size={size} />;
  };

const OwnerTabs = () => {
  const { colors } = useTheme();

  const tabBarStyle = {
    backgroundColor: colors.background,
    borderTopColor: colors.border,
  };

  return (
    <OwnerTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle,
        tabBarIcon: getOwnerTabBarIcon(route),
      })}
    >
      <OwnerTab.Screen
        name="OwnerDashboard"
        component={OwnerDashboardScreen}
        options={{ tabBarLabel: 'Dashboard' }}
      />
      <OwnerTab.Screen
        name="OwnerCourts"
        component={OwnerCourtsScreen}
        options={{ tabBarLabel: 'Courts' }}
      />
      <OwnerTab.Screen
        name="OwnerSales"
        component={OwnerSalesScreen}
        options={{ tabBarLabel: 'Sales' }}
      />
      <OwnerTab.Screen
        name="OwnerProfile"
        component={OwnerProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </OwnerTab.Navigator>
  );
};

const OwnerNavigator = () => (
  <OwnerStack.Navigator screenOptions={{ headerShown: false }}>
    <OwnerStack.Screen name="OwnerTabs" component={OwnerTabs} />
    <OwnerStack.Screen name="Notifications" component={NotificationsScreen} />
    <OwnerStack.Screen
      name="OwnerCourtManagement"
      component={OwnerCourtManagementScreen}
    />
    <OwnerStack.Screen name="OwnerAddCourt" component={OwnerAddCourtScreen} />
  </OwnerStack.Navigator>
);

const PlayerTabs = () => {
  const { colors } = useTheme();

  const tabBarStyle = {
    backgroundColor: colors.background,
    borderTopColor: colors.border,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle,
        tabBarIcon: getPlayerTabBarIcon(route),
      })}
    >
      <Tab.Screen
        name="PlayerHome"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ tabBarLabel: 'Book' }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ tabBarLabel: 'History' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Alerts' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

const PlayerNavigator = () => (
  <PlayerStack.Navigator screenOptions={{ headerShown: false }}>
    <PlayerStack.Screen name="PlayerTabs" component={PlayerTabs} />
    <PlayerStack.Screen name="CourtDetail" component={CourtDetailScreen} />
    <PlayerStack.Screen name="HistoryDetail" component={HistoryDetailScreen} />
  </PlayerStack.Navigator>
);

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

const AdminNavigator = () => (
  <AdminStack.Navigator screenOptions={{ headerShown: false }}>
    <AdminStack.Screen name="AdminHome" component={AdminScreen} />
  </AdminStack.Navigator>
);

export const RootNavigator = () => {
  const { user, role } = useAppSelector(state => state.app);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <RootStack.Screen name="AuthStack" component={AuthNavigator} />
        ) : role === 'admin' ? (
          <RootStack.Screen name="AdminStack" component={AdminNavigator} />
        ) : role === 'player' ? (
          <RootStack.Screen name="PlayerStack" component={PlayerNavigator} />
        ) : role === 'owner' ? (
          <RootStack.Screen name="OwnerStack" component={OwnerNavigator} />
        ) : (
          <RootStack.Screen name="PlayerStack" component={PlayerNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
