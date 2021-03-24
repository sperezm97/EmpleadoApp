import { EmIcon } from 'components/common/EmIcon';
import React from 'react';
import { ProfileScreen } from 'screens/profile/ProfileScreen';
import { SearchScreen } from 'screens/search/SearchScreen';
import { SettingsScreen } from 'screens/settings/SettingsScreen';
import { tabBarOptions } from 'utils/TabBar.styles';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export type EmParamsProps = {
  Settings: undefined;
  Search: undefined;
  Profile: undefined;
};

export type EmTabNavigationProp = BottomTabNavigationProp<EmParamsProps>;

const Tab = createBottomTabNavigator<EmParamsProps>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions} initialRouteName="Search">
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: (props) => <EmIcon icon={faCog} {...props} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: (props) => <EmIcon icon={faSearch} {...props} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: (props) => <EmIcon icon={faUser} {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
