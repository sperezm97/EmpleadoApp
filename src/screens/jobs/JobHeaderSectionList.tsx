import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Spaces } from 'theme';

export const JobHeaderSectionList: React.FC = (props) => {
  const { children } = props;
  return (
    <EmView style={styles.container}>
      <EmText type="header" color="black">
        {children}
      </EmText>
      <EmView
        bgColor="primaryColor"
        style={{ height: 5, width: '25%', marginVertical: Spaces.xs }}
      />
    </EmView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Spaces.xs,
  },
});
