import { ThemeProvider } from 'hooks/useTheme';
import React from 'react';
import { ProfileScreen } from 'screens/profile/ProfileScreen';
import { SearchScreen } from 'screens/search/SearchScreen';
import { SettingsScreen } from 'screens/settings/SettingsScreen';

import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export type EmParamsProps = {
  Settings: undefined;
  Search: undefined;
  Profile: undefined;
};

export type EmTabNavigationProp = BottomTabNavigationProp<EmParamsProps>;

const Tab = createBottomTabNavigator<EmParamsProps>();

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
