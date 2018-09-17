import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import addonBackgrounds from "@storybook/addon-backgrounds";
import Marked from 'storybook-readme/components/Marked';
import { withDocs } from 'storybook-readme';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components'
import { Button } from '../index'

const Code = (element, name) => `
**Usage**
~~~js
${reactElementToJSXString(element)}
~~~
**Example**
`

// Backgrounds
export const backgrounds = addonBackgrounds([
  { name: "default", value: "#ffffff", default: true },
  { name: "twitter", value: "#00aced" },
  { name: "facebook", value: "#3b5998" },
]);

// Style Sheet
export const styles = {
  header: {
    h1: {
      color: '#3b5998'
    }
  },
}

// Config Stories
export const configStories = (playground, name, description, example) => {
  const stories = storiesOf(name, module);
  // Addons
  stories.addDecorator(withKnobs);
  stories.addDecorator(backgrounds);
  stories.add('Introduction', () => (
    <Container>
      <Marked md={`# ${name}`} />
      <br />
      <div>
        <Back />
        <PropTypes name={name}/>
      </div>
      {playground()}
      <br />
      <Marked md={Code(playground(), name)} />
      <br />
      {example()}
    </Container>
  ));
  stories.add('PropTypes', withInfo({ 
    styles,
    text: description,
  })(playground));
  return stories
}

export const Back = ({ color }) => (
  <Button 
    title='Go Back'
    color={color || 'gray'}
    onClick={linkTo('Magenta UI', 'Components')}
  />
)

export const PropTypes = ({ name }) => (
  <Button 
    title='Go to PropTypes'
    color={'#00aced'}
    onClick={linkTo(name, 'PropTypes')}
  />
)

export const Container = styled.div`
  padding: 10px;
`