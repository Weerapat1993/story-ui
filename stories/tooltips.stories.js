import React from 'react';
import { Button, ToolTips } from '../index'
import { configStories } from './config'
import { action } from '@storybook/addon-actions';

const stories = configStories(() => (
  <ToolTips tips='Tips'>
    <Button title='Button' onClick={action('Click')} />
  </ToolTips>
),
  'Tool Tips', 
  'String or React Element with docs about my component',
() => (
  <ToolTips tips='Tips'>
    <Button title='Button' onClick={action('Click')} />
  </ToolTips>
))
