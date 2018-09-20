import React from 'react';
import { Button, ToolTips } from '../index'
import { configStories } from './config'
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs'

const stories = configStories(() => (
  <ToolTips tips={text('Tips', 'Hide Text')}>
    <Button title='Button' color='blueviolet' onClick={action('Click')} />
  </ToolTips>
),
  'Tool Tips', 
  'String or React Element with docs about my component',
() => (
  <ToolTips tips={text('Tips', 'Hide Text')}>
    <Button title='Button' color='blueviolet' onClick={action('Click')} />
  </ToolTips>
))
