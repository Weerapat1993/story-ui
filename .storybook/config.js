import { configure } from '@storybook/react';
import { configure as viewFunction } from '@storybook/addon-viewport'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  header: true, // Toggles display of header with component name and description
});
configure(loadStories, module);
setOptions({
  name: 'Magenta UI',
  sidebarAnimations: false,
})
viewFunction({
  defaultViewport: 'iphone6'
})
