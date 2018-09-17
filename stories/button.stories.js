import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from '../index'
import { configStories } from './config'

const stories = configStories(() => (
  <Button 
    title={text('Title', 'Title')}
    color={text('Color', 'green')} 
    primary={boolean('Primary', true)} 
    onClick={action('clicked')}
  />
),
  'Button', 
  'String or React Element with docs about my component',
() => (
  <Fragment>
    <div>
      <Button 
        title={text('Title', 'Title')}
        color={text('Color', 'green')} 
        primary={boolean('Primary', true)} 
        onClick={action('clicked')}
      />
    </div>
    <div>
      <Button onClick={action('clicked')}>Default</Button>
      <Button primary onClick={action('clicked')}>Primary</Button>
      <Button color='blue' primary onClick={action('clicked')}>Blue</Button>
      <Button color='red' primary onClick={action('clicked')}>Red</Button>
      <Button color='black' primary onClick={action('clicked')}>Black</Button>
      <Button color='gray' primary onClick={action('clicked')}>Gray</Button>
    </div>
    <div>
      <Button onClick={action('clicked')}>Default</Button>
      <Button onClick={action('clicked')}>Primary</Button>
      <Button color='blue' onClick={action('clicked')}>Blue</Button>
      <Button color='red' onClick={action('clicked')}>Red</Button>
      <Button color='black' onClick={action('clicked')}>Black</Button>
      <Button color='gray' onClick={action('clicked')}>Gray</Button>
    </div>
  </Fragment>
))