import React, { Fragment } from 'react';
import { text } from '@storybook/addon-knobs';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from '../index'
import { configStories } from './config'

// Constants
const cardArr = ['#333', 'gray', 'green', 'orange', 'red', 'blue', 'blueviolet', 'purple', 'brown']

const stories = configStories(() => (
  <Card
    title={text('Card Title', 'Card Title')}
    color={text('Card Color', 'brown')} 
    actions={() => 'Actions'}>
    Card Body
  </Card>
),
  'Card', 
  'String or React Element with docs about my component',
() => (
  <Fragment>
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
))
