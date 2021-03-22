import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { EmTag } from './EmTag';

storiesOf('Empleado Category Tag', module)
  .add('graphicDesigner', () => <EmTag type="graphicDesigner" />)
  .add('dba', () => <EmTag type="dba" />)
  .add('gameDev', () => <EmTag type="gameDev" />)
  .add('itSales', () => <EmTag type="itSales" />)
  .add('mobileDev', () => <EmTag type="mobileDev" />)
  .add('network', () => <EmTag type="network" />)
  .add('softwareDev', () => <EmTag type="softwareDev" />)
  .add('sysAdmin', () => <EmTag type="sysAdmin" />)
  .add('webDev', () => <EmTag type="webDev" />);
