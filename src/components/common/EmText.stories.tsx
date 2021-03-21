import React from 'react';

import { storiesOf } from '@storybook/react-native';

import EmText from './EmText';

storiesOf('Empleado Text', module).add('default', () => (
  <EmText>default</EmText>
));
