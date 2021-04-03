import { images } from 'assets/images/images';
import { EmIcon } from 'components/common/EmIcon';
import { EmTag } from 'components/common/EmTag';
import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import { MainNavigationProps } from 'navigator/navigation.types';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Colors, Shadows, Spaces } from 'theme';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/core';

interface JobItemProps {
  hasLogo?: boolean;
}

export const JobItem: React.FC<JobItemProps> = (props) => {
  const { hasLogo = true } = props;
  const navigation = useNavigation<MainNavigationProps>();

  const handleOnPressed = () => {
    navigation.navigate('JobDetails');
  };

  return (
    <Pressable onPress={handleOnPressed}>
      <View style={styles.container}>
        <EmView row style={styles.rowContainer}>
          <EmText type="header" color="black" style={styles.titleText}>
            Senior iOS Developer
          </EmText>
          {hasLogo && (
            <Image
              source={images.dba}
              resizeMode="cover"
              style={styles.image}
            />
          )}
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
    </Pressable>
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
    fontWeight: 'bold',
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
  },
  locationName: {
    marginLeft: Spaces.xs,
  },
});
