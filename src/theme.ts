import { TextStyle } from 'react-native';

interface Fonts {
  caption: TextStyle;
  body: TextStyle;
  button: TextStyle;
  subHeader: TextStyle;
  header: TextStyle;
}

export const Spaces = {
  xs: 4,
  sm: 8,
  nm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 28,
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

  white: '#ffffff',
  black: '#000000',

  background: '#f8f8f8',
  disabled: '#9eabba',
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
    fontFamily: 'SFProDisplay-Bold',
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

const Theme = {
  colors: Colors,
  fonts: Fonts,
  shadows: Shadows,
  spaces: Spaces,
};

export type Theme = typeof Theme;

export default Theme;
