import React from 'react'
import { shallow } from 'enzyme';
import 'jest-styled-components'
import { CardHeader, CardBody, CardPlate, CardTitle, CardTitleActions, Flex } from '../Card'
import { Card } from '../index'

const title = '<Card />'

describe(title, () => {
  it(`renders ${title} components`, () => {
    const wrapper = shallow(<Card title='Title' color='red'>Card Body</Card>);
    expect(wrapper.find(CardPlate).length).toEqual(1)
    expect(wrapper.find(CardHeader).length).toEqual(1)
    expect(wrapper.find(CardTitle).length).toEqual(1)
    expect(wrapper.find(CardTitleActions).length).toEqual(1)
    expect(wrapper.find(CardBody).length).toEqual(1)
  })

  it(`renders ${title} components check style when prop color = null`, () => {
    const color = '#333'
    const wrapper = shallow(<Card title='Title'>Card Body</Card>);
    expect(wrapper.find(CardPlate)).toHaveStyleRule('border-color', color)
    expect(wrapper.find(CardTitle)).toHaveStyleRule('color', color)
    expect(wrapper.find(CardHeader)).toHaveStyleRule('border-bottom-color', color)
    expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', 'transparent')
  })

  it(`renders ${title} components check style when prop color = red`, () => {
    const color = 'red'
    const wrapper = shallow(<Card title='Title' color={color}>Card Body</Card>);
    expect(wrapper.find(CardPlate)).toHaveStyleRule('border-color', color)
    expect(wrapper.find(CardTitle)).toHaveStyleRule('color', '#fff')
    expect(wrapper.find(CardHeader)).toHaveStyleRule('border-bottom-color', color)
    expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', color)
  })
})