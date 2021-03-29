import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { Pressable, PressableProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Spaces } from 'theme';

import { EmText } from './EmText';

interface ButtonProps extends PressableProps {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const EmButton: React.FC<ButtonProps> = (props) => {
  const { children, buttonStyle, textStyle, ...restProps } = props;
  const { colors } = useTheme();

  return (
    <Pressable
      {...restProps}
      style={[
        styles.button,
        restProps.disabled
          ? { backgroundColor: colors.secondaryColor }
          : { backgroundColor: colors.primaryColor },
        buttonStyle,
      ]}>
      <EmText type="button" color="white" style={textStyle}>
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
    maxHeight: 80,
    borderRadius: 4,
    padding: Spaces.sm,
  },
});
