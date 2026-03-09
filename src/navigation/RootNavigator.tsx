import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '../redux/store';
import {
    RootStackParamList,
    AdminStackParamList,
    PlayerStackParamList,
    AuthStackParamList,
} from './types';
import { HomeScreen } from '../screens/Home/home.screen';
import { LoginScreen } from '../screens/Login/login.screen';
import { AdminScreen } from '../screens/Admin/admin.screen';
import { SignupScreen } from '../screens/Signup/signup.screen';
import { BookingScreen } from '../screens/Booking/booking.screen';
import { CourtDetailScreen } from '../screens/CourtDetail/courtdetail.screen';
import { HistoryScreen } from '../screens/History/history.screen';
import { HistoryDetailScreen } from '../screens/HistoryDetail/historydetail.screen';
import { NotificationsScreen } from '../screens/Notifications/notifications.screen';
import { ProfileScreen } from '../screens/Profile/profile.screen';
import { OwnerDashboardScreen } from '../screens/OwnerDashboard/ownerdashboard.screen';
import { Home, Calendar, LayoutDashboard, Bell, User, DollarSign } from 'lucide-react-native';
import { useTheme } from '../theme';
import { Text, View } from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AdminStack = createNativeStackNavigator<AdminStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const PlayerStack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator<PlayerStackParamList>();

const OwnerStack = createNativeStackNavigator<any>();
const OwnerTab = createBottomTabNavigator<any>();

// Placeholder screens
const Placeholder = ({ name, title }: { name: string, title?: string }) => {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
            <Text style={{ color: colors.text }}>{title || name} Screen</Text>
        </View>
    );
};

const OwnerPlaceholder = ({ route }: any) => <Placeholder name={route.name} />;

const OwnerTabs = () => {
    const { colors } = useTheme();

    return (
        <OwnerTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                },
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'OwnerDashboard') return <LayoutDashboard color={color} size={size} />;
                    if (route.name === 'OwnerCourts') return <Calendar color={color} size={size} />;
                    if (route.name === 'OwnerSales') return <DollarSign color={color} size={size} />;
                    if (route.name === 'Profile') return <User color={color} size={size} />;
                    return <Home color={color} size={size} />;
                },
            })}
        >
            <OwnerTab.Screen name="OwnerDashboard" component={OwnerDashboardScreen} options={{ tabBarLabel: 'Dashboard' }} />
            <OwnerTab.Screen name="OwnerCourts" component={OwnerPlaceholder} options={{ tabBarLabel: 'Courts' }} />
            <OwnerTab.Screen name="OwnerSales" component={OwnerPlaceholder} options={{ tabBarLabel: 'Sales' }} />
            <OwnerTab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
        </OwnerTab.Navigator>
    );
};

const OwnerNavigator = () => (
    <OwnerStack.Navigator screenOptions={{ headerShown: false }}>
        <OwnerStack.Screen name="OwnerTabs" component={OwnerTabs} />
        <OwnerStack.Screen name="Notifications" component={NotificationsScreen} />
    </OwnerStack.Navigator>
);

const PlayerTabs = () => {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                },
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'PlayerHome') return <Home color={color} size={size} />;
                    if (route.name === 'Booking') return <Calendar color={color} size={size} />;
                    if (route.name === 'History') return <LayoutDashboard color={color} size={size} />;
                    if (route.name === 'Notifications') return <Bell color={color} size={size} />;
                    if (route.name === 'Profile') return <User color={color} size={size} />;
                    return <Home color={color} size={size} />;
                },
            })}
        >
            <Tab.Screen name="PlayerHome" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="Booking" component={BookingScreen} options={{ tabBarLabel: 'Book' }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: 'History' }} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarLabel: 'Alerts' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
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
    const { user, role } = useAppSelector((state) => state.app);

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

