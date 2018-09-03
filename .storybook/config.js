import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Respectre',
  url: 'https://github.com/jagcompacion/respectre',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

const req = require.context('../src/stories/', true, /\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
