import React, { PureComponent } from 'react';
import { text } from '@storybook/addon-knobs';
import { Form, Radio } from 'semantic-ui-react'
import { FormControl, Button, Row, Col } from '../index'
import { configStories } from './config'

class App extends PureComponent {
  state = {
    payment: '',
    coupon: '',
  }
  handleChange = (e, { value }) => this.setState({ payment: value })
  handleChangeCoupon = (e, { value }) => this.setState({ coupon: value })

  render() {
    return (
      <Form>
        <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
          <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
        </FormControl>
        <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
          <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
        </FormControl>
        <FormControl label={'เลือกประเภทการชำระเงิน'}>
          <Row reverse>
            <Col style={{ padding: 10, paddingBottom: 5 }}>
              <Radio
                label='ชำระเงินด้วยเงินสด'
                name='payment'
                value='Money'
                checked={this.state.payment === 'Money'}
                onChange={this.handleChange}
              />
            </Col>
            <Col style={{ padding: 10, paddingBottom: 5 }}>
              <Radio
                label='ชำระเงินด้วยบัตรเครดิต'
                name='payment'
                value='Credit'
                checked={this.state.payment === 'Credit'}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormControl>
        <FormControl label={'เลือกประเภทการชำระเงิน'}>
          <Row reverse>
            <Col style={{ padding: 10, paddingBottom: 5 }}>
              <Radio
                label='รับ Gift Voucher'
                name='coupon'
                value='gift_voucher'
                checked={this.state.coupon === 'gift_voucher'}
                onChange={this.handleChangeCoupon}
              />
            </Col>
            <Col style={{ padding: 10, paddingBottom: 5 }}>
              <Radio
                label='รับส่วนลดเงินสด'
                name='coupon'
                value='discount'
                checked={this.state.coupon === 'discount'}
                onChange={this.handleChangeCoupon}
              />
            </Col>
          </Row>
        </FormControl>
        <Button type='submit' color='green' title='Submit' />
      </Form>
    )
  }
}

const stories = configStories(() => (
  <Form>
    <FormControl label={text('Label', 'มูลค่าของกระเช้าที่ลดสูงสุด 35%')}>
      <input type='number' max={35} placeholder={text('Placeholder', 'Please select number only')} />
    </FormControl>
  </Form>
),
  'Form', 
  'String or React Element with docs about my component',
() => <App />)
