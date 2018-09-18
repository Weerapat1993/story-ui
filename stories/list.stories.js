import React from 'react';
import { List, ListItem } from '../index'
import { text } from '@storybook/addon-knobs';
import { configStories } from './config'

const stories = configStories(() => (
  <List 
    borderColor={text('Border Color', '#00AA00')}
    bgColor={text('Background Color', '#AAEECC')}
    textColor={text('Text Color', '#333')}
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
    borderColor={text('Border Color', '#00AA00')}
    bgColor={text('Background Color', '#AAEECC')}
  >
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
  </List>
  )
})