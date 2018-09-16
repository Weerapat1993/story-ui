import { configure } from '@storybook/react';
import { configure as viewFunction } from '@storybook/addon-viewport'
import { setOptions } from '@storybook/addon-options'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

setOptions({
  name: 'Storybook',
  addonPanelInRight: true,
  sidebarAnimations: false,
})

viewFunction({
  defaultViewport: 'iphone6'
})
