import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Colors, Fonts } from 'theme';

interface EmText extends TextProps {
  type?: keyof typeof Fonts;
  color?: keyof typeof Colors;
}

export const EmText: React.FC<EmText> = (props) => {
  const { children, type = 'body', color = 'black', style, ...rest } = props;

  const fontStyles = Fonts[type];

  const fontColor = { color: Colors[color] };

  return (
    <Text {...rest} style={StyleSheet.flatten([fontStyles, fontColor, style])}>
      {children}
    </Text>
  );
};
