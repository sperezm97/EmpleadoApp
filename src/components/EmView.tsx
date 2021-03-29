import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Colors } from 'theme';

interface EmViewProps extends ViewProps {
  row?: boolean;
  column?: boolean;
  center?: boolean;
  bgColor?: keyof typeof Colors;
}

export const EmView: React.FC<EmViewProps> = (props) => {
  const {
    children,
    row = false,
    column = false,
    center = false,
    bgColor = 'white',
    style,
    ...rest
  } = props;

  // TODO: Find better way to validate this conditionals
  const rowStyle = row ? styles.row : {};
  const columnStyle = column ? styles.column : {};
  const centerStyle = center ? styles.center : {};
  const bgColorsStyle = { backgroundColor: Colors[bgColor] };

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        rowStyle,
        columnStyle,
        centerStyle,
        bgColorsStyle,
        style,
      ])}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
