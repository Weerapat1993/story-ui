import React from 'react'
import { NavLink } from 'react-router-dom'
import { func, element, node, oneOfType, string, bool } from 'prop-types'
import styled from 'styled-components'

const NavbarBTN = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: ${props => props.color};
  font-size: 12px;
  position: relative;
  &:hover {
    color: ${props => props.color};
    text-decoration: ${props => props.isUnderline ? 'underline' : 'node'};
    background: rgba(255, 255, 255, 0.2);
  }
  &:after {
    content: '';
    height: 25%;
    width: ${props => props.isLine ? '2px' : '0px'};
    position: absolute;
    right: 0;
    background-color: ${props => props.lineColor};
  }

  &:last-child::after {
    width: 0px;
  }
`

export const NavbarItem = (props) => (
  <NavbarBTN {...props}>
    {props.children}
  </NavbarBTN>
)

NavbarItem.propTypes = {
  to: string.isRequired,
  color: string,
  isUnderline: bool,
  isLine: bool,
  lineColor: string,
  border: string,
  children: oneOfType([
    func,
    element,
    node,
    string,
  ])
}

NavbarItem.defaultProps = {
  color: 'white',
  lineColor: '#bebebe',
  isLine: false,
  isUnderline: false,
  children: ''
}
