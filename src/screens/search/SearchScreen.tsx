import { EmButton } from 'components/common/EmButton';
import { EmIcon } from 'components/common/EmIcon';
import { EmSwitch } from 'components/common/EmSwitch';
import { EmText } from 'components/common/EmText';
import { useTheme } from 'hooks/useTheme';
import { MainNavigationProps, MainParamsProps } from 'navigator/navigation.types';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, GlobalStyles, Spaces } from 'theme';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/core';

import { categories, CategoryCard } from './categories';
import { CategoryItem } from './CategoryItem';

export const SearchScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<MainNavigationProps>();

  const handlePressedSearchButton = () => {
    navigation.navigate('Jobs', {
      searchValue: 'Developer',
    });
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={styles.headerContainer}>
        <EmText type="header" color="black">
          Hola, ¿Qué tipo de trabajo estamos buscando?
        </EmText>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <EmIcon icon={faSearch} color={colors.primaryColor} />
      </View>
      <View>
        <EmText type="subHeader" color="black" style={styles.searchByCategory}>
          Buscar por Categorias
        </EmText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}>
          {categories.map((item: CategoryCard) => (
            <CategoryItem key={item.id.toString()} {...item} />
          ))}
        </ScrollView>
        <View style={styles.remotesContainer}>
          <EmText type="subHeader" color="black">
            Buscar solo empleos remotos
          </EmText>
          <EmSwitch />
        </View>
        <View>
          <EmButton
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={handlePressedSearchButton}>
            Buscar
          </EmButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: '20%',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Spaces.lg,
    marginBottom: '10%',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: Colors.primaryColor,
  },
  searchByCategory: {
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginVertical: Spaces.nm,
  },
  remotesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%',
  },
  button: {
    height: 80,
    width: '100%',
  },
  buttonText: {
    ...Fonts.header,
    color: Colors.white,
    fontSize: 30,
  },
});
