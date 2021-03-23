import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { EmSwitch } from './EmSwitch';

storiesOf('Switch/toggle Button ', module)
  .add('active', () => <EmSwitch value={true} />)
  .add('inactive', () => <EmSwitch value={false} />);
