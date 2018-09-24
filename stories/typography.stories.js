import React, { Fragment } from 'react';
import { configStories } from './config'
import { H1, H2, H3, H4, Paragraph } from '../index'

const stories = configStories(() => (
  <Fragment>
    <H1 align='center' type='bold' color='red'>Heading 1</H1>
    <H2 color='blue'>Heading 2</H2>
    <H3 color='blueviolet'>Heading 3</H3>
    <H4 color='orange'>Heading 4</H4>
    <Paragraph color='green'>Paragraph</Paragraph>
  </Fragment>
),
  'Typography', 
  'String or React Element with docs about my component',
() => (
  <Fragment>
    <H1 align='center' type='bold' color='red'>Heading 1</H1>
    <H2 color='blue'>Heading 2</H2>
    <H3 color='blueviolet'>Heading 3</H3>
    <H4 color='orange'>Heading 4</H4>
    <Paragraph color='green'>Paragraph</Paragraph>
  </Fragment>
))
