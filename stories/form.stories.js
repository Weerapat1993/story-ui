import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react'
import { FormControl } from '../index'
import { configStories } from './config'


const stories = configStories(() => (
  <Form>
    <FormControl label={text('Label', 'First Name')}>
      <input placeholder={text('Label', 'First Name')} />
    </FormControl>
  </Form>
),
  'Form', 
  'String or React Element with docs about my component',
() => (
  <Form>
    <FormControl label={text('Label', 'First Name')}>
      <input placeholder={text('Label', 'First Name')} />
    </FormControl>
  </Form>
))
