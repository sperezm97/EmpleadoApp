import { useTheme } from 'hooks/useTheme';
import { TagCategoriesTypes } from 'models/TagCategories';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Spaces } from 'theme';

import { EmText } from './EmText';

interface EmTagProps {
  type: TagCategoriesTypes;
}

export const EmTag: React.FC<EmTagProps> = (props) => {
  const { type } = props;

  const getBackgroundByType = (): string => {
    switch (type) {
      case 'dba':
        return '#ffe500';
      case 'gameDev':
        return '#fe9800';
      case 'graphicDesigner':
        return '#e81e63';
      case 'itSales':
        return '#8bc24a';
      case 'mobileDev':
        return '#673ab6';
      case 'network':
        return '#009688';
      case 'softwareDev':
        return '#3f51b4';
      case 'sysAdmin':
        return '#06a9f3';
      case 'webDev':
        return '#9c27af';
    }
  };

  const getLabelByType = () => {
    switch (type) {
      case 'dba':
        return 'Administrador de Bases de datos';
      case 'gameDev':
        return 'Desarrollador de Videojuegos';
      case 'graphicDesigner':
        return 'Diseñador Grafico';
      case 'itSales':
        return 'IT Ventas';
      case 'mobileDev':
        return 'Desarrollador Mobile';
      case 'network':
        return 'Redes y Telecomunicaciones';
      case 'softwareDev':
        return 'Desarrollador de Software';
      case 'sysAdmin':
        return 'Administrador de Sistemas';
      case 'webDev':
        return 'Desarrollador Web';
    }
  };

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { backgroundColor: getBackgroundByType() },
      ])}>
      <EmText type="caption" color="white" style={styles.text}>
        {getLabelByType()}
      </EmText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spaces.xs,
    margin: Spaces.xs,
    borderRadius: 4,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 0.13,
  },
});
