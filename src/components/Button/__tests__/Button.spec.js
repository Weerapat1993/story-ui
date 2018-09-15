import React from 'react'
import { shallow } from 'enzyme';
import Button from '../Button'


describe('<Button />', () => {
  it('renders <Button /> components', () => {
    const App = () => (
      <Button>Title</Button>
    )
    const wrapper = shallow(<App />);
    const recieved = wrapper.find('Button').length
    expect(recieved).toEqual(1)
  })

  it('renders <Button /> components check primary = true', () => {
    const App = () => (
      <Button primary>Title</Button>
    )
    const wrapper = shallow(<App />);
    const recieved = wrapper.props().primary
    expect(recieved).toEqual(true)
  })

  it('renders <Button /> components check children = Title', () => {
    const App = () => (
      <Button primary>Title</Button>
    )
    const wrapper = shallow(<App />);
    const recieved = wrapper.props().children
    expect(recieved).toEqual('Title')
  })
})