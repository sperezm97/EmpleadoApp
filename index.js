/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import StorybookUIRoot from './storybook';
import { RUN_STORYBOOK } from 'react-native-dotenv';

AppRegistry.registerComponent(appName, () =>
  RUN_STORYBOOK ? StorybookUIRoot : App,
);
