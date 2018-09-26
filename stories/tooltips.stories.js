import React, { PureComponent } from 'react';
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
const Bold = styled.div`
  font-weight: bold;
`

const styles = {
  size: (width, height) => ({
    width,
    height: height || width
  }),
}

class Example extends PureComponent {
  constructor() {
    super()

    this.state = {
      visible: false,
    }
  }

  handleAlert = () => {
    const { visible } = this.state
    if(!visible) {
      this.setState({ visible: true })
      setTimeout(() => {
        this.setState({ visible: false })
      }, 3000)
    }
  }

  renderTitle = () => (
    <Row>
      <Col>
        <Center>
          <img src={CHECK} alt='check' style={styles.size(22)} />
        </Center>
      </Col>
      <Col flex={2}>
        <Bold>{textMsg}</Bold>
        <Bold>{textMsg2}</Bold>
      </Col>
    </Row>
  )

  render() {
    const { visible } = this.state
    return (
      <Row>
        <Col />
        <Col>
          <ToolTips visible={visible} tips={this.renderTitle()}>
            <Button 
              title={JSON.stringify(visible)} 
              color='blueviolet' 
              onClick={this.handleAlert} 
            />
          </ToolTips>
        </Col>
      </Row>
    )
  }
}

const stories = configStories(() => (
  <Example />
),
  'Tool Tips', 
  'String or React Element with docs about my component',
() => (
  <Example />
))
