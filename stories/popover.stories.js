import React, { PureComponent } from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover'
import posed from 'react-pose';
import styled from 'styled-components'
import { Button } from '../index'
import { configStories } from './config'

const OverCardAnimated = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    background: '#FFF',
  },
  hover: {
    background: '#EEE',
  },
  press: {
    background: '#DDD',
  },
});

const OverCard = styled(OverCardAnimated)`
  cursor: pointer;
  background: white;
  padding: 10px;
  border: 1px solid #EEE;
  border-bottom: 0px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  &:last-child {
    border-bottom: 1px solid #EEE;
  }
`

class App extends PureComponent {
  state = { 
    visible: false,
    value: 'Select Fruit'
  }

  toggle(visible) {
    this.setState({ visible })
    console.log('visible', visible)
  }

  render() {
    const { visible, value } = this.state
    return (
      <Popover
        isOpen={visible}
        position={['bottom']}
        padding={10}
        onClickOutside={() => this.setState({ visible: false })}
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={'white'}
            arrowSize={10}
            arrowStyle={{ opacity: 1 }}
          >
            <OverCard onClick={() => this.setState({ visible: false, value: 'Apple' })}>
              Apple
            </OverCard>
            <OverCard onClick={() => this.setState({ visible: false, value: 'Banana' })}>
              Banana
            </OverCard>
          </ArrowContainer>
        )}
      >
        <Button
          onClick={() => this.toggle(!visible)}
          onMouseOver={() => this.toggle(true)}
          onMouseOut={() => this.toggle(true)} 
        >
          {value || 'Select Fruit'}
        </Button>
      </Popover>
    )
  }
}

const stories = configStories(() => (
  <App />
),
  'Popover', 
  'String or React Element with docs about my component',
() => (
  <App />
))
