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
import { Home, Calendar, LayoutDashboard, Bell, User } from 'lucide-react-native';
import { useTheme } from '../theme';
import { Text } from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AdminStack = createNativeStackNavigator<AdminStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<PlayerStackParamList>();

// Placeholder screens
const Placeholder = ({ name }: { name: string }) => {
    const { colors } = useTheme();
    return <Text style={{ color: colors.text }}>{name} Screen</Text>;
};

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
                    let iconName;
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
            <Tab.Screen name="Booking" component={() => <Placeholder name="Booking" />} options={{ tabBarLabel: 'Book' }} />
            <Tab.Screen name="History" component={() => <Placeholder name="History" />} options={{ tabBarLabel: 'History' }} />
            <Tab.Screen name="Notifications" component={() => <Placeholder name="Notifications" />} options={{ tabBarLabel: 'Alerts' }} />
            <Tab.Screen name="Profile" component={() => <Placeholder name="Profile" />} options={{ tabBarLabel: 'Profile' }} />
        </Tab.Navigator>
    );
};

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
                ) : (
                    <RootStack.Screen name="PlayerStack" component={PlayerTabs} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
