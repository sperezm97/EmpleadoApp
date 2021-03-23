/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
// import { RUN_STORYBOOK } from '@env';
// TODO: Fix storybook on load app. Developer should wants to choose between Storybook or the app
// if (RUN_STORYBOOK) {
// }

import('./storybook');
AppRegistry.registerComponent(appName, () => App);
