import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { EmText } from './EmText';

storiesOf('Empleado Text', module)
  .add('default', () => <EmText>default</EmText>)
  .add('caption', () => <EmText type="caption">caption</EmText>)
  .add('body', () => <EmText type="body">body</EmText>)
  .add('button', () => <EmText type="button">button</EmText>)
  .add('subHeader', () => <EmText type="subHeader">subHeader</EmText>)
  .add('header', () => <EmText type="header">header</EmText>);
