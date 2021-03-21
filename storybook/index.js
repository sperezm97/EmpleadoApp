import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
// TODO: Automate Add componets to storybook
configure(() => {
  require('../src/components/common/EmText.stories.tsx');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
