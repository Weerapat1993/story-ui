import React from 'react'
import { bool, string, node, oneOfType, element, func } from 'prop-types'
import styled from 'styled-components'

export const BTN = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props) => {
  const { children, primary } = props
  return (
    <BTN {...props} primary={primary}>{children}</BTN>
  )
}

Button.propTypes = {
  primary: bool,
  children: oneOfType([
    string,
    element,
    node,
    func,
  ])
}

Button.defaultProps = {
  primary: false,
  children: null,
}

export default Button
