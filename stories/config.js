import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import addonBackgrounds from "@storybook/addon-backgrounds";
import { Button } from '../index'

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
export const configStories = (func, name, description, example) => {
  const stories = storiesOf(name, module);
  // Addons
  stories.addDecorator(withKnobs);
  stories.addDecorator(backgrounds);
  stories.add('Introduction', () => (
    <Fragment>
      <div><Back /></div>
      {example()}
    </Fragment>
  ));
  stories.add('Playground', 
  withInfo({ 
    styles,
    text: description,
  })(() => (
    <Fragment>
      <div><Back /></div>
      {func()}
    </Fragment>
  )))
  return stories
}

export const Back = ({ color }) => (
  <Button 
    title='Go Back'
    color={color || 'gray'}
    onClick={linkTo('Magenta UI', 'Components')}
  />
)