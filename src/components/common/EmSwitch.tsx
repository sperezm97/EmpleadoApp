import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { SwitchProps, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export const EmSwitch: React.FC<SwitchProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Switch
      {...props}
      trackColor={{ false: colors.secondaryColor, true: colors.primaryColor }}
      thumbColor={colors.white}
      ios_backgroundColor={colors.secondaryColor}
    />
  );
};
