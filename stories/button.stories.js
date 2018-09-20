import React, { Fragment } from 'react';
import { upperFirst } from 'lodash'
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Marked from 'storybook-readme/components/Marked';
import { Button } from '../index'
import { configStories } from './config'

// Constants
const colors = ['black', 'gray', 'green', 'orange', 'red', 'blue', 'blueviolet', 'purple', 'brown']

const options = {
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
};

const stories = configStories(() => (
  <Button 
    title={text('Title', 'Button')}
    size={select('Size', options, 'medium')}
    color={text('Color', '#ccc')} 
    isActions={boolean('Btn Actions', false)}
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
    <br />
    <Marked md={`
--------
### Size
`} 
/>
    <br />
    <div>
      <Button size='small' color='blueviolet' onClick={action('clicked')}>Small</Button>
      <Button size='medium' color='blueviolet' onClick={action('clicked')}>Medium</Button>
      <Button size='large' color='blueviolet' onClick={action('clicked')}>Large</Button>
    </div>
    <br />
    <Marked md={`
--------
### Disabled
`} 
/>
    <br />
    <div>
      <Button color='red' disabled onClick={action('clicked')}>Disabled</Button>
      <Button outline color='red' disabled onClick={action('clicked')}>Disabled</Button>
    </div>
  </Fragment>
))