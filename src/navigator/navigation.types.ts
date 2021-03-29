import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

/// Main navigation
export type MainParamsProps = {
  Tab: undefined;
  Jobs: {
    searchValue: string;
  };
  JobDetails: undefined;
};

export type MainNavigationProps = StackNavigationProp<MainParamsProps>;
export type MainRouteProps = RouteProp<MainParamsProps, 'Jobs'>;

/// Tab navigation
export type EmParamsProps = {
  Settings: undefined;
  Search: undefined;
  Profile: undefined;
};

export type EmTabNavigationProp = BottomTabNavigationProp<EmParamsProps>;
