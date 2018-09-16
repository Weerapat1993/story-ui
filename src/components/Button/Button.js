import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'

// Constants
export const BTN_COLOR = 'green'

export const BTN = styled.button`
  background: ${props => props.primary ? props.color : "white"};
  color: ${props => props.primary ? "white" : props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.color};
  border-radius: 3px;
`;

const Button = (props) => {
  const { title, primary, children, color } = props
  return (
    <BTN {...props} color={color} primary={primary}>{title || children}</BTN>
  )
}

Button.propTypes = {
  title: string,
  primary: bool,
  children: string,
  color: string,
}

Button.defaultProps = {
  title: '',
  primary: false,
  children: '',
  color: BTN_COLOR,
}

export default Button
