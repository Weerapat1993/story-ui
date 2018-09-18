import React, { PureComponent, Fragment } from 'react';
import { Modal, Button } from '../index'
import { configStories } from './config'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions';

export const BlackPage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px;
`

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleModal = (visible) => {
    this.setState({ visible })
  }

  render() {
    const { visible } = this.state
    console.log(visible)
    return (
      <Fragment>
        <Button title='Modal' color={'orange'} onClick={() => this.handleModal(true)} />
        <Modal title='Modal' visible={visible} width={300} onBlur={() => this.handleModal(false)}>
          Modal Description
        </Modal>
      </Fragment>
    )
  }
}

const stories = configStories(() => (
  <Modal title='Modal' visible={false} width={300} onBlur={action('Click')}>
    Modal Description
  </Modal>
),
  'Modal', 
  'String or React Element with docs about my component', 
  () => <App />
)
