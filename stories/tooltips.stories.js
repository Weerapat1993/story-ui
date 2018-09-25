import React from 'react';
import styled from 'styled-components'
import { Button, ToolTips, Row, Col } from '../index'
import { configStories } from './config'
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs'
import CHECK from '../src/assets/images/check.png'

const textMsg = `เพิ่มสินค้า`
const textMsg2 = `เรียบร้อยแล้ว`

const Center = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`

const styles = {
  size: (width, height) => ({
    width,
    height: height || width
  }),
}

const renderTitle = () => (
  <Row>
    <Col>
      <Center>
        <img src={CHECK} alt='check' style={styles.size(22)} />
      </Center>
    </Col>
    <Col flex={3}>
      <div>{textMsg}</div>
      <div>{textMsg2}</div>
    </Col>
  </Row>
)


const stories = configStories(() => (
  <Row>
    <Col />
    <Col>
      <ToolTips tips={renderTitle()}>
        <Button title='Button' color='blueviolet' onClick={action('Click')} />
      </ToolTips>
    </Col>
  </Row>
),
  'Tool Tips', 
  'String or React Element with docs about my component',
() => (
  <Row>
    <Col />
    <Col>
      <ToolTips tips={renderTitle()}>
        <Button title='Button' color='blueviolet' onClick={action('Click')} />
      </ToolTips>
    </Col>
  </Row>
))
