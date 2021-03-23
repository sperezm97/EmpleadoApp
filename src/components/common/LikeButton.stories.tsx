import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { LikeButton } from './LikeButton';

storiesOf('Like Button ', module)
  .add('active', () => <LikeButton value={true} toggleValue={() => {}} />)
  .add('inactive', () => <LikeButton value={false} toggleValue={() => {}} />);
