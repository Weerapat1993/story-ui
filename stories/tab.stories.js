import React from 'react';
import { Tabs } from '../index'
import { configStories } from './config'

const stories = configStories(() => (
  <Tabs>
    <div label="Gator">
      Gator
    </div>
    <div label="Croc">
      Crocodile
    </div>
    <div label="Sarcosuchus">
      Sarcosuchus
    </div>
  </Tabs>
),
  'Tabs', 
  'String or React Element with docs about my component',
() => (
  <Tabs>
    <div label="Gator">
      Gator
    </div>
    <div label="Croc">
      Crocodile
    </div>
    <div label="Sarcosuchus">
      Sarcosuchus
    </div>
  </Tabs>
))
