import React from 'react';
import { List, ListItem } from '../index'
import { configStories } from './config'

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
() => (
  <List>
    <ListItem>List Item 1</ListItem>
    <ListItem color='red'>List Item 2</ListItem>
    <ListItem color='green'>List Item 3</ListItem>
  </List>
))