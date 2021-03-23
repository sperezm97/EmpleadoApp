import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { Spaces } from 'theme';

import { EmText } from './EmText';

interface ButtonProps extends PressableProps {}

export const EmButton: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props;
  const { colors } = useTheme();

  return (
    <Pressable
      {...restProps}
      style={[
        styles.button,
        restProps.disabled
          ? { backgroundColor: colors.secondaryColor }
          : { backgroundColor: colors.primaryColor },
      ]}>
      <EmText type="button" color="white">
        {children}
      </EmText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 375,
    borderRadius: 4,
    padding: Spaces.sm,
  },
});
