import React from 'react';
import { List, ListItem } from '../index'
import { text } from '@storybook/addon-knobs';
import { configStories } from './config'
import { action } from 'popmotion';

const stories = configStories(() => (
  <List
    borderColor={text('Border Color', '#CCCCCC')}
    bgColor={text('Background Color', 'transparent')}
    textColor={text('Text Color', '#333333')}
  >
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
  </List>
),
  'List', 
`**List**
* List
* ListItem

**Example**
~~~js
<List>
  <ListItem>List Item 1</ListItem>
  <ListItem>List Item 2</ListItem>
  <ListItem>List Item 3</ListItem>
</List>
~~~
`,
() => {
  return (
  <List
    borderColor={text('Border Color', '#CCCCCC')}
    bgColor={text('Background Color', 'transparent')}
    textColor={text('Text Color', '#333333')}
  >
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
  </List>
  )
})