import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Marked from 'storybook-readme/components/Marked';
import styled from 'styled-components'
import { withDocs } from 'storybook-readme';
import { Button } from '..'

// Constants
const colors = ['black', 'gray', 'green', 'orange', 'red', 'blue', 'blueviolet', 'purple', 'brown']
const BTN_COLOR = '#00aced'
const components = [
  'Button', 
  'Card',
  'Form',
  'Grid',
  'List',
  'Modal',
  'Tabs',
  'Tool Tips',
]

// Getting Started
const GettingStarted = `# Getting Started

Following the Magenta UI specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.
`

const Installation = `# Installation
Add **magenta-ui** into **package.json**

**package.json**
~~~json
{
  ...
  "magenta-ui": "git@bitbucket.org:centraltechnology/magenta-ui.git"
}
~~~

**Using npm or yarn**
~~~sh
npm install
~~~

## Usage

~~~js
import { Button } from 'magenta-ui';

const App = () => (
  <Button />
)
~~~

## Links
`

const Container = styled.div`
  padding: 10px;
`

const stories = storiesOf('Magenta UI', module);
const menuBtn = (name) => <Button color={BTN_COLOR} onClick={linkTo('Magenta UI', name)} title={name} />

// Introduction
stories
// .addDecorator(withDocs('# Magenta UI'))
  .add('Getting Started', () => (
    <Container>
      <Marked md={GettingStarted} />
      {menuBtn('Installation')}
      {menuBtn('Components')}
    </Container>
  ))
  .add('Installation', () => (
    <Container>
      <Marked md={Installation} />
      {menuBtn('Getting Started')}
      {menuBtn('Components')}
    </Container>
  ))
  .add('Components', () => (
    <Container>
      <Marked md={'# Components'} />
      {
        components.map((item, i) => (
          <Button key={item} color={colors[i]} onClick={linkTo(item)} title={item} />
        ))
      }
    </Container>
  ))