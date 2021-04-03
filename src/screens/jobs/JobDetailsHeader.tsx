import { EmIcon } from 'components/common/EmIcon';
import { EmTag } from 'components/common/EmTag';
import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Colors, Spaces } from 'theme';

import { faChevronLeft, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const JobDetailsHeader = () => {
  const { colors } = useTheme();

  return (
    <>
      <EmView style={styles.headerContainer} bgColor="background">
        <Pressable>
          <EmIcon icon={faChevronLeft} size={21} color={colors.black} />
        </Pressable>
        <EmText type="header" color="black">
          Detalles
        </EmText>
        <Pressable>
          <EmIcon icon={faHeart} size={21} color={colors.primaryColor} />
        </Pressable>
      </EmView>
      <EmView style={styles.jobContainer} bgColor="background">
        <EmView bgColor="background">
          <EmText type="header" color="black" style={styles.titleText}>
            Senior iOS Developer
          </EmText>
        </EmView>
        <EmView row style={styles.secondLineContainer} bgColor="background">
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
        <EmView row style={styles.rowContainer} bgColor="background">
          <EmView row bgColor="background">
            <EmIcon
              icon={faMapMarkerAlt}
              color={colors.secondaryColor}
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
      </EmView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
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
  jobContainer: {
    paddingVertical: Spaces.lg,
    backgroundColor: Colors.background,
  },
});
