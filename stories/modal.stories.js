import React, { PureComponent, Fragment } from 'react';
import { Modal, Button } from '../index'
import { configStories } from './config'
import { action } from '@storybook/addon-actions';

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
    return (
      <Fragment>
        <Button title='Modal' color={'orange'} onClick={() => this.handleModal(!visible)} />
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
