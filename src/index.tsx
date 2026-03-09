import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './redux/store';
import { ThemeProvider } from './theme';
import { RootNavigator } from './navigation/RootNavigator';
import './localization/i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider>
                        <RootNavigator />
                    </ThemeProvider>
                </QueryClientProvider>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
