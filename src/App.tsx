import { ThemeProvider } from 'hooks/useTheme';
import { AppNavigator } from 'navigator/AppNavigator';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'theme';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaView>
  );
};
