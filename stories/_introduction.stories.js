import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Marked from 'storybook-readme/components/Marked';
import styled from 'styled-components'
import { withDocs } from 'storybook-readme';
import { Button } from '../index'

// Constants
const BTN_COLOR = '#00aced'
const links = ['Button', 'Card']

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

// Introduction
stories
// .addDecorator(withDocs('# Magenta UI'))
  .add('Getting Started', () => (
    <Container>
      <Marked md={GettingStarted} />
      <Button color={BTN_COLOR} onClick={linkTo('Magenta UI', 'Installation')} title='Installation' />
      <Button color={BTN_COLOR} onClick={linkTo('Magenta UI', 'Components')} title='Components' />
    </Container>
  ))
  .add('Installation', () => (
    <Container>
      <Marked md={Installation} />
      {
        links.map((item) => (
          <Button key={item} color={BTN_COLOR} onClick={linkTo(item)} title={item} />
        ))
      }
    </Container>
  ))
  .add('Components', () => (
    <Container>
      <Marked md={'# Components'} />
      {
        links.map((item) => (
          <Button key={item} color={BTN_COLOR} onClick={linkTo(item)} title={item} />
        ))
      }
    </Container>
  ))