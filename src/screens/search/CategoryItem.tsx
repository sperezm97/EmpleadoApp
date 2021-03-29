import { EmText } from 'components/common/EmText';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Colors, Spaces } from 'theme';

import { CategoryCard } from './categories';

interface CategoryItemProps extends CategoryCard {}

export const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  return (
    <View style={styles.categoryCardContainer} key={props.id.toString()}>
      <Image
        source={props.image}
        style={styles.categoryImage}
        resizeMode="cover"
      />
      <View>
        <EmText
          type="button"
          color="secondaryColor"
          style={{ textAlign: 'center' }}>
          {props.label}
        </EmText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCardContainer: {
    height: 110,
    width: 110,
    backgroundColor: Colors.white,
    margin: Spaces.xs,
    padding: Spaces.xs,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  categoryImage: {
    height: 60,
    width: 60,
  },
});
