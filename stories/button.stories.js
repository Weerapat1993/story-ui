import React, { Fragment } from 'react';
import { upperFirst } from 'lodash'
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from '../index'
import { configStories } from './config'

// Constants
const colors = ['black', 'gray', 'green', 'orange', 'red', 'blue', 'blueviolet', 'purple', 'brown']

const stories = configStories(() => (
  <Button 
    title={text('Title', 'Title')}
    color={text('Color', 'black')} 
    outline={boolean('Outline', false)} 
    onClick={action('clicked')}
  />
),
  'Button', 
  'String or React Element with docs about my component',
() => (
  <Fragment>
    <div>
      {
        colors.map((item, i) => (
          (!i) ? (
            <Button key={i} outline onClick={action('clicked')}>Default</Button>
          ) : (
            <Button key={i} color={item} outline onClick={action('clicked')}>{upperFirst(item)}</Button>
          )
        ))
      }
    </div>
    <div>
      {
        colors.map((item, i) => (
          (!i) ? (
            <Button key={i} color='black' onClick={action('clicked')}>Default</Button>
          ) : (
            <Button key={i} color={item} onClick={action('clicked')}>{upperFirst(item)}</Button>
          )
        ))
      }
    </div>
  </Fragment>
))