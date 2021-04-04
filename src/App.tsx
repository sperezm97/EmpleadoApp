import { ThemeProvider } from 'hooks/useTheme';
import { AppNavigator } from 'navigator/AppNavigator';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Colors } from 'theme';

// Create a client
const queryClient = new QueryClient();

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
};
