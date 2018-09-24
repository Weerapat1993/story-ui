import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components'
import { Modal, Button } from '../index'
import { configStories, styles } from './config'
import { action } from '@storybook/addon-actions';

const H2 = styled.h2`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '24px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`

const Shadow = styled.div`
  height: 30px;
  width: auto;
  max-width: 760px;
  margin: -15px;
  margin-top: 30px;
  background-image: linear-gradient(to bottom, rgba(226, 226, 226, 0), #b1b1b1);
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
          <div style={{ textAlign: 'center' }}>
            <H2 type='bold'>ขออภัยค่ะ :</H2>
            <H2 type='bold' color='red'>กรุณาชำระเงิน ในตะกร้านี้ก่อนค่ะ</H2>
            <p>
              * สินค้านี้ใช้เวลา 4 วัน ในการดำเนินการจัดส่ง  จึงไม่สามารถจัดส่งและชำระเงิน พร้อมกับสินค้าที่คุณเลือกก่อนหน้านี้ได้
            </p>
          </div>
          <Shadow />
        </Modal>
      </Fragment>
    )
  }
}

const stories = configStories(() => (
  <Modal title='Modal' visible={false} width={300} onClose={action('Click')}>
    Modal Description
  </Modal>
),
  'Modal', 
  'String or React Element with docs about my component', 
  () => <App />
)
