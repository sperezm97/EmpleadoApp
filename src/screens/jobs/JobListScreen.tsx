import { EmIcon } from 'components/common/EmIcon';
import { EmText } from 'components/common/EmText';
import { MainRouteProps } from 'navigator/navigation.types';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, GlobalStyles, Spaces } from 'theme';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/core';

import { JobItem } from './JobItem';

export const JobListScreen = () => {
  const route = useRoute<MainRouteProps>();

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.headerContainer}>
        <EmIcon size={21} icon={faChevronLeft} />
        <EmText type="subHeader" color="black" style={styles.searchText}>
          {route.params.searchValue}
        </EmText>
      </View>

      <FlatList
        data={[{ id: 'hi' }, { id: 'hi' }]}
        ListHeaderComponent={() => (
          <View style={styles.headerListContainer}>
            <EmText type="header" color="black" style={styles.headerListText}>
              384 Empleos disponibles
            </EmText>
          </View>
        )}
        renderItem={() => <JobItem />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: Spaces.nm,
    marginVertical: Spaces.xl,
    alignItems: 'center',
  },
  searchText: {
    marginLeft: Spaces.nm,
    letterSpacing: 0.2,
  },
  headerListContainer: {
    marginBottom: Spaces.xl,
  },
  headerListText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
