import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react'
import { FormControl, Button } from '../index'
import { configStories } from './config'

const stories = configStories(() => (
  <Form>
    <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
      <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
    </FormControl>
    <Button type='submit' color='green' title='Submit' />
  </Form>
),
  'Form', 
  'String or React Element with docs about my component',
() => (
  <Form>
    <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
      <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
    </FormControl>
    <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
      <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
    </FormControl>
    <Button type='submit' color='green' title='Submit' />
  </Form>
))
