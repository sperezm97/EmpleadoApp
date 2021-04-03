import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Spaces } from 'theme';

export const JobCompany = () => {
  return (
    <EmView style={styles.container}>
      <EmView center>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: 'https://via.placeholder.com/150.png' }}
        />
      </EmView>
      <EmView>
        <EmText type="subHeader" color="black">
          company name
        </EmText>
        <EmText type="body" color="black">
          company email
        </EmText>
      </EmView>
    </EmView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Spaces.nm,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});
