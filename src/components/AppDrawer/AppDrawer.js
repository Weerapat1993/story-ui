import React from 'react'
import { func, element, node, oneOfType, string } from 'prop-types'
import styled from 'styled-components'

const AppDrawerHeader = styled.header`
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
`

const AppDrawer = (props) => (
  <AppDrawerHeader {...props}>
    {props.title}
  </AppDrawerHeader>
)

AppDrawer.propTypes = {
  bgColor: string,
  title: oneOfType([
    func,
    element,
    node,
  ]),
  children: oneOfType([
    func,
    element,
    node,
  ])
}

AppDrawer.defaultProps = {
  bgColor: '#4e1f66',
  title: 'Title',
  children: '',
}

export default AppDrawer