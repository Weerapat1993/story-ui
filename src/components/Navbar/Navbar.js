import React from 'react'
import { func, element, node, oneOfType, string } from 'prop-types'
import styled from 'styled-components'
import { NavbarItem } from './NavbarItem'

const NavbarHeader = styled.nav`
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`


export const Navbar = (props) => (
  <NavbarHeader {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        color: props.color,
        lineColor: props.lineColor,
        isLine: props.isLine,
        isUnderline: props.isUnderline,
      })
    )}
  </NavbarHeader>
)

Navbar.Item = NavbarItem

Navbar.propTypes = {
  bgColor: string,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

Navbar.defaultProps = {
  bgColor: '#4e1f66',
  children: '',
}
