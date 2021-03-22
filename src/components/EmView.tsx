import React from 'react';
import { View, ViewProps } from 'react-native';

interface EmViewProps extends ViewProps {}

export const EmView: React.FC<EmViewProps> = (props) => {
  const { children, ...rest } = props;
  return <View {...rest}>{props.children}</View>;
};
