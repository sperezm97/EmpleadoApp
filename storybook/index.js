import { AppRegistry } from 'react-native';

import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { name as appName } from '../app.json';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
// TODO: Automate Add components to storybook
configure(() => {
  require('../src/components/common/EmText.stories.tsx');
  require('../src/components/common/EmTag.stories.tsx');
  require('../src/components/common/LikeButton.stories.tsx');
  require('../src/components/common/EmButton.stories.tsx');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
