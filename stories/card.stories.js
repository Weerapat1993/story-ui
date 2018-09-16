import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from '../index'

const stories = storiesOf('Card', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Constants
const cardArr = ['red', 'green', 'blue']

// Card
stories.add('Card Basic', () => (
    <Fragment>
      <Card
        title={text('Card Title', 'Card Title')}
        color={text('Card Color', 'brown')} 
        actions={() => 'Actions'}>
        <Skeleton count={5} />
      </Card>
      {
        cardArr.map((item, key) => (
          <SkeletonTheme key={key} highlightColor={item}>
            <Card title={<Skeleton width={200} count={1} />} color={item} actions={() => 'Actions'}>
              <Skeleton count={5} />
            </Card>
          </SkeletonTheme>
        ))
      }
    </Fragment>
  )
);