import React from 'react';
import { StyleSheet, Text } from 'react-native';

const EmText: React.FC = (props) => {
  const { children } = props;

  return <Text>{children}</Text>;
};

export default EmText;

const styles = StyleSheet.create({});
