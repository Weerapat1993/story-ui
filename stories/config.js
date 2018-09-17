import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import addonBackgrounds from "@storybook/addon-backgrounds";

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
  stories.add('Introduction', example);
  stories.add('Playground', 
  withInfo({ 
    styles,
    text: description,
  })(func))
  return stories
}