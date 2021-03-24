import React from 'react';

import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';

interface EmIcon extends Props {}

export const EmIcon: React.FC<EmIcon> = (props) => {
  return <FontAwesomeIcon {...props} />;
};
