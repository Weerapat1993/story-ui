import React from 'react';
import { List, ListItem } from '../index'
import { configStories } from './config'
import hexToRgba from 'hex-to-rgba'

const stories = configStories(() => (
  <List>
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
  const color = '#00AA00'
  return (
  <List>
    <ListItem>List Item 1</ListItem>
    <ListItem color='red'>List Item 2</ListItem>
    <ListItem 
      color='white' 
      bgColor={color}
      highlightColor={hexToRgba(color, 0.9)}
    >List Item 3</ListItem>
  </List>
  )
})