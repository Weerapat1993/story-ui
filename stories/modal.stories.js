import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components'
import { Modal, Button, Row, Col, H2 } from '../index'
import { configStories } from './config'

const Shadow = styled.div`
  height: 30px;
  flex: 1;
  margin: -15px;
  margin-top: 30px;
  background-image: linear-gradient(to bottom, rgba(226, 226, 226, 0), #b1b1b1);
`

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    return (
      <Fragment>
        <Button title='Modal' color={'orange'} onClick={() => this.handleModal(!visible)} />
        <Modal
          visible={visible} 
          width={760} 
          onClose={() => this.handleModal(false)}
          footer={() => (
            <div style={{ padding: 30, background: 'white' }}>
              <Button 
                title='ตกลง' 
                color={'green'} 
                onClick={() => this.handleModal(false)} 
                width={180} 
                height={40} 
              />
            </div>
          )}
        >
          <Flex>
            <H2 align='center' type='bold'>ขออภัยค่ะ :</H2>
            <H2 align='center' type='bold' color='red'>กรุณาชำระเงิน ในตะกร้านี้ก่อนค่ะ</H2>
            <Row responsive={false}>
              <Col />
              <p style={{ textAlign: 'center' }}>
                * สินค้านี้ใช้เวลา 4 วัน ในการดำเนินการจัดส่ง  จึงไม่สามารถจัดส่งและชำระเงิน พร้อมกับสินค้าที่คุณเลือกก่อนหน้านี้ได้
              </p>
              <Col />
            </Row>
          </Flex>
          <Shadow />
        </Modal>
      </Fragment>
    )
  }
}

class Example extends PureComponent {
  state = { visible: false }

  handleModal = (visible) => {
    this.setState({ visible })
  }

  render() {
    const { visible } = this.state
    return (
      <Fragment>
        <Button title='Modal' color={'orange'} onClick={() => this.handleModal(!visible)} />
        <Modal
          title='Modal'
          visible={visible} 
          width={760} 
          onClose={() => this.handleModal(false)}
        >
          Modal Description
        </Modal>
      </Fragment>
    )
  }
}

const stories = configStories(() => (
  <Example />
),
  'Modal', 
  'String or React Element with docs about my component', 
  () => <App />
)
