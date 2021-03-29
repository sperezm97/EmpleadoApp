import React from 'react';
import { JobListScreen } from 'screens/jobs/JobListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainParamsProps } from './navigation.types';
import { TabNavigator } from './TabNavigator';

const Main = createStackNavigator<MainParamsProps>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Main.Navigator detachInactiveScreens mode="card" headerMode="none">
        <Main.Screen name="Tab" component={TabNavigator} />
        <Main.Screen name="JobDetails" component={TabNavigator} />
        <Main.Screen name="Jobs" component={JobListScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
