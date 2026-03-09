import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../redux/store';
import {
    RootStackParamList,
    AdminStackParamList,
    UserStackParamList,
    AuthStackParamList,
} from './types';
import { HomeScreen } from '../screens/Home/home.screen';
import { LoginScreen } from '../screens/Login/login.screen';
import { AdminScreen } from '../screens/Admin/admin.screen';
import { SignupScreen } from '../screens/Signup/signup.screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AdminStack = createNativeStackNavigator<AdminStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

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

const UserNavigator = () => (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
        <UserStack.Screen name="Home" component={HomeScreen} />
    </UserStack.Navigator>
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
                    <RootStack.Screen name="UserStack" component={UserNavigator} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
