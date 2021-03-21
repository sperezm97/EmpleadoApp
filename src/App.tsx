import React from 'react';
import { HomeScreen } from 'screens/home/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

export type EmParamsProps = {
  Home: undefined;
};

export type EmNavigationProps = StackNavigationProp<EmParamsProps>;

const EmpleadoStack = createStackNavigator<EmParamsProps>();

export const App = () => {
  return (
    <NavigationContainer>
      <EmpleadoStack.Navigator>
        <EmpleadoStack.Screen name="Home" component={HomeScreen} />
      </EmpleadoStack.Navigator>
    </NavigationContainer>
  );
};
