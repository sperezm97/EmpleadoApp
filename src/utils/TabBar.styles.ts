import { Colors, Fonts, Spaces } from 'theme';

import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';

export const tabBarOptions: BottomTabBarOptions = {
  activeBackgroundColor: Colors.background,
  inactiveBackgroundColor: Colors.background,
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: Colors.disabled,
  allowFontScaling: false,
  labelPosition: 'below-icon',
  adaptive: true,
  iconStyle: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  keyboardHidesTabBar: true,
  labelStyle: {
    ...Fonts.subHeader,
    fontFamily: 'SFProDisplay-Regular',
  },
  showLabel: true,
  tabStyle: {},
  style: {
    borderTopWidth: 0,
    height: 60,
  },
};
