import React from 'react';
import { storiesOf } from '@storybook/react';

// Pages
import Home from './pages/Home';
import About from './pages/About';

storiesOf('Preview', module)
  .add('Home', () => <Home />)
  .add('About', () => <About />);
