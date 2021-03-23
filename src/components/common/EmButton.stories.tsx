import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { EmButton } from './EmButton';

storiesOf('Solid Button', module)
  .add('active', () => <EmButton>Button</EmButton>)
  .add('inactive', () => <EmButton disabled>Button</EmButton>);
