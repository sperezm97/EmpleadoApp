import { TagCategoriesTypes } from 'models/TagCategories';

export const getBackgroundByType = (type: TagCategoriesTypes): string => {
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

export const getLabelByType = (type: TagCategoriesTypes) => {
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
