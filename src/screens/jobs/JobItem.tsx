import { images } from 'assets/images/images';
import { EmIcon } from 'components/common/EmIcon';
import { EmTag } from 'components/common/EmTag';
import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Shadows, Spaces } from 'theme';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const JobItem = () => {
  return (
    <View style={styles.container}>
      <EmView row style={styles.rowContainer}>
        <EmText type="header" color="black" style={styles.titleText}>
          Senior iOS Developer
        </EmText>
        <Image source={images.dba} resizeMode="cover" style={styles.image} />
      </EmView>

      <EmView row style={styles.secondLineContainer}>
        <EmView
          bgColor="primaryColor"
          center
          style={styles.remoteLabelContainer}>
          <EmText type="body" color="white" style={styles.remoteLabelText}>
            Remote
          </EmText>
        </EmView>
        <EmText type="body" color="black">
          MegSoft
        </EmText>
      </EmView>

      <EmView row style={styles.rowContainer}>
        <EmView row>
          <EmIcon
            icon={faMapMarkerAlt}
            color={Colors.secondaryColor}
            size={16}
          />
          <EmText type="body" color="disabled" style={styles.locationName}>
            Santo Domingo, RD
          </EmText>
        </EmView>
        <EmView>
          <EmTag type="graphicDesigner" />
        </EmView>
      </EmView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    marginBottom: Spaces.sm,
    padding: Spaces.nm,
    ...Shadows,
  },
  titleText: {
    fontWeight: '500',
  },
  image: {
    height: 54,
    width: 54,
  },
  rowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remoteLabelContainer: {
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: Spaces.xs,
    marginBottom: Spaces.xs,
    marginRight: Spaces.sm,
  },
  remoteLabelText: {
    fontWeight: 'bold',
  },
  secondLineContainer: {
    alignItems: 'center',
    marginTop: -5,
  },
  locationName: {
    marginLeft: Spaces.xs,
  },
});
