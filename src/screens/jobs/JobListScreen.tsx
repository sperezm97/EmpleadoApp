import { EmIcon } from 'components/common/EmIcon';
import { EmText } from 'components/common/EmText';
import { EmView } from 'components/EmView';
import { Job } from 'models/Job';
import { MainNavigationProps, MainRouteProps } from 'navigator/navigation.types';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { JobServices } from 'services/JobService';
import { Colors, GlobalStyles, Spaces } from 'theme';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/core';

import { JobItem } from './JobItem';

export const JobListScreen = () => {
  const { params } = useRoute<MainRouteProps>();
  const navigation = useNavigation<MainNavigationProps>();

  const { data, isLoading } = useQuery<Job[]>(
    ['search', { keyword: params.keyword, isRemote: params.keyword }],
    async () => {
      const { data } = await JobServices.searchJobs({
        keyword: params.keyword,
        isRemote: params.keyword,
      });
      return data;
    },
  );

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={onBack}>
          <EmIcon size={21} icon={faChevronLeft} />
        </Pressable>
        <EmText type="subHeader" color="black" style={styles.searchText}>
          {params.keyword}
        </EmText>
      </View>

      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <EmView>
            <EmText>No se encontró ninguna vacante</EmText>
          </EmView>
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerListContainer}>
            <EmText type="header" color="black" style={styles.headerListText}>
              {data?.length} Empleos disponibles
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
