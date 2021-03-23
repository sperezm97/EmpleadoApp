import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { LikeButton } from './LikeButton';

storiesOf('Like Button s', module)
  .add('active', () => <LikeButton value={true} toggleValue={() => {}} />)
  .add('inative', () => <LikeButton value={false} toggleValue={() => {}} />);
