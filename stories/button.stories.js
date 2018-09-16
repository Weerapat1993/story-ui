import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Welcome } from '@storybook/react/demo'
import { Button } from '../index'

const stories = storiesOf('Button', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// Button
stories.add('with text', () => (
    <Fragment>
      <div>
        <Button 
          title={text('Title', 'Title')}
          color={text('Color', 'green')} 
          primary={boolean('Primary', true)} 
          onClick={action('clicked')}
        />
      </div>
      <div>
        <Button onClick={action('clicked')}>Default</Button>
        <Button primary onClick={action('clicked')}>Primary</Button>
        <Button color='blue' primary onClick={action('clicked')}>Blue</Button>
        <Button color='red' primary onClick={action('clicked')}>Red</Button>
        <Button color='black' primary onClick={action('clicked')}>Black</Button>
        <Button color='gray' primary onClick={action('clicked')}>Gray</Button>
      </div>
      <div>
        <Button onClick={action('clicked')}>Default</Button>
        <Button onClick={action('clicked')}>Primary</Button>
        <Button color='blue' onClick={action('clicked')}>Blue</Button>
        <Button color='red' onClick={action('clicked')}>Red</Button>
        <Button color='black' onClick={action('clicked')}>Black</Button>
        <Button color='gray' onClick={action('clicked')}>Gray</Button>
      </div>
    </Fragment>
  )
);