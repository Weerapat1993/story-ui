import React from 'react';
import { number } from '@storybook/addon-knobs';
import styled from 'styled-components'
import { Row, Col } from '../index'
import { configStories } from './config'

// Constants
const Plate = styled.div`
  background-color: #ddd;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  margin: 5px;
`

const stories = configStories(() => (
  <Row>
    <Col count={number('Flex Left', 1)} />
    <Col count={number('Flex Right', 1)} />
  </Row>
),
  'Grid', 
`**Grid**
* Row
* Column

**Example**
~~~js
  <Row>
    <Col count={1} />
    <Col count={1} />
  </Row>
~~~
`,
() => (
  <Row>
    <Col count={number('Flex Left', 1)}><Plate>{number('Flex Left', 1)}</Plate></Col>
    <Col count={number('Flex Right', 1)}><Plate>{number('Flex Right', 1)}</Plate></Col>
  </Row>
))