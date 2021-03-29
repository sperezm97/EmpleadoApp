import { useTheme } from 'hooks/useTheme';
import { TagCategoriesTypes } from 'models/TagCategories';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Spaces } from 'theme';
import { getBackgroundByType, getLabelByType } from 'utils/ColorUtil';

import { EmText } from './EmText';

interface EmTagProps {
  type: TagCategoriesTypes;
}

export const EmTag: React.FC<EmTagProps> = (props) => {
  const { type } = props;

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { backgroundColor: getBackgroundByType(type) },
      ])}>
      <EmText type="caption" color="white" style={styles.text}>
        {getLabelByType(type)}
      </EmText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spaces.xs,
    margin: Spaces.xs,
    borderRadius: 4,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 0.13,
  },
});
