import React from 'react';
import { Tabs } from '../index'
import { configStories } from './config'

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
