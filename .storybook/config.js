import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import errorBoundaryDecorator from '../src/addons/error-boundary-addon/decorator';

addDecorator(errorBoundaryDecorator); // Should be one of the decorator you add

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  header: false, // Toggles display of header with component name and description
  source: false,
});
configure(loadStories, module);
setOptions({
  name: 'Magenta UI',
  addonPanelInRight: true,
  sidebarAnimations: false,
})
