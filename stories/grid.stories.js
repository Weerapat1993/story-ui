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
    <Col flex={number('Flex One', 1)} />
    <Col flex={number('Flex Two', 1)} />
    <Col flex={number('Flex Three', 1)} />
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
    <Col flex={number('Flex One', 1)}><Plate>{number('Flex One', 1)}</Plate></Col>
    <Col flex={number('Flex Two', 1)}><Plate>{number('Flex Two', 1)}</Plate></Col>
    <Col flex={number('Flex Three', 1)}><Plate>{number('Flex Three', 1)}</Plate></Col>
  </Row>
))