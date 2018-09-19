import React, { Fragment } from 'react';
import { text } from '@storybook/addon-knobs';
import { Tabs } from '../index'
import { configStories } from './config'

// Constants
const cardArr = ['#333', 'gray', 'green', 'orange', 'red', 'blue', 'blueviolet', 'purple', 'brown']

const stories = configStories(() => (
  <Tabs>
    <div label="Gator">
      See ya later, <em>Alligator</em>!
    </div>
    <div label="Croc">
      After &apos;while, <em>Crocodile</em>!
    </div>
    <div label="Sarcosuchus">
      Nothing to see here, this tab is <em>extinct</em>!
    </div>
  </Tabs>
),
  'Tabs', 
  'String or React Element with docs about my component',
() => (
  <Tabs>
    <div label="Gator">
      See ya later, <em>Alligator</em>!
    </div>
    <div label="Croc">
      After &apos;while, <em>Crocodile</em>!
    </div>
    <div label="Sarcosuchus">
      Nothing to see here, this tab is <em>extinct</em>!
    </div>
  </Tabs>
))
