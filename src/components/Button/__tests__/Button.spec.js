import React from 'react'
import { shallow } from 'enzyme';
import 'jest-styled-components'
import { BTN, BTN_COLOR } from '../Button'
import { Button } from '../index'

const title = '<Button />'

describe(title, () => {
  it(`renders ${title} components check primary = true`, () => {
    const wrapper = shallow(<Button primary>Title</Button>);
    const recieved = wrapper.find(BTN).props().primary
    expect(recieved).toEqual(true)
  })

  it(`renders ${title} components check primary = false`, () => {
    const wrapper = shallow(<Button>Title</Button>);
    const recieved = wrapper.find(BTN).props().primary
    expect(recieved).toEqual(undefined)
  })
})