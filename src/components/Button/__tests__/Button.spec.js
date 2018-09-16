import React from 'react'
import { shallow } from 'enzyme';
import 'jest-styled-components'
import { BTN } from '../Button'
import { Button } from '../index'


describe('<Button />', () => {
  it('renders <BTN /> components check primary = true', () => {
    const wrapper = shallow(<Button primary>Title</Button>);
    const recieved = wrapper.find(BTN).props().primary
    expect(recieved).toEqual(true)
  })

  it('renders <BTN /> components check primary = false', () => {
    const wrapper = shallow(<Button>Title</Button>);
    const recieved = wrapper.find(BTN).props().primary
    expect(recieved).toEqual(false)
  })
  it('renders <BTN /> components check style color when primary = false', () => {
    const wrapper = shallow(<Button>Title</Button>);
    expect(wrapper).toHaveStyleRule('color', 'palevioletred')
    expect(wrapper).toHaveStyleRule('background', 'white')
  })
  it('renders <BTN /> components check style color when primary = true', () => {
    const wrapper = shallow(<Button primary>Title</Button>);
    expect(wrapper).toHaveStyleRule('color', 'white')
    expect(wrapper).toHaveStyleRule('background', 'palevioletred')
  })
})