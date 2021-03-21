import { TextStyle } from 'react-native';

export interface Fonts {
  caption: TextStyle;
  body: TextStyle;
  button: TextStyle;
  subHeader: TextStyle;
  header: TextStyle;
}

export const Spaces = {
  xs: 5,
  sm: 10,
  nm: 15,
  md: 20,
  lg: 25,
  xl: 30,
  xxl: 35,
};

export const Colors = {
  primaryColor: '#13BAC3',
  secondaryColor: '#94A1B2',

  // Color Categories
  darkPink: '#EF476F',
  darkBlue: '#3D3D8C',
  mediumBlue: '#8075FF',
  frenchBlue: '#0061C3',
  lightBlue: '#32C5FF',
  green: '#119DA4',
  lightGreen: '#74BE58',
  yellow: '#FFC857',
  orange: '#FF9C57',
};

export const Fonts: Fonts = {
  caption: {
    fontFamily: 'SFProDisplay-light',
    fontSize: 12,
  },
  body: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 14,
  },
  button: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 16,
  },
  subHeader: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 18,
  },
  header: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 21,
  },
};

export const Shadows = {
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 15,
  elevation: 5,
};

export const Theme = {
  colors: Colors,
  fonts: Fonts,
  shadows: Shadows,
  spaces: Spaces,
};

export type Theme = typeof Theme;
