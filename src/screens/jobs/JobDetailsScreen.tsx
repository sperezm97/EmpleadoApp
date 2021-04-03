import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from 'theme';

import { JobCompany } from './JobCompany';
import { JobDetailsHeader } from './JobDetailsHeader';
import { JobHeaderSectionList } from './JobHeaderSectionList';
import { useJobList } from './JobHooks';

const htmlContent = `
    <h4>This HTML snippet is now rendered with native components !</h4>
    <h5>Enjoy a webview-free and blazing fast application</h5>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export const JobDetailsScreen = () => {
  const data = useJobList();
  const { width } = useWindowDimensions();
  const renderItem: ListRenderItem<any> = ({ item }) => {
    const content =
      item.key === 'company' ? (
        <JobCompany />
      ) : (
        <HTML source={{ html: htmlContent }} contentWidth={width} />
      );

    return (
      <>
        <JobHeaderSectionList>{item.title}</JobHeaderSectionList>
        {content}
      </>
    );
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      <JobDetailsHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
