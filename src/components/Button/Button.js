import React from 'react'
import { string, bool } from 'prop-types'
import styled from 'styled-components'

// Constants
export const BTN_COLOR = '#333'

export const BTN = styled.button`
  cursor: pointer;
  background: ${props => !props.outline ? props.color : "white"};
  color: ${props => !props.outline ? "white" : props.color};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 1em;
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  
  &:hover {
    background: ${props => props.outline ? props.color : "white"};
    color: ${props => props.outline ? "white" : props.color};
    border: 2px solid ${props => props.color};
  }
`;

const Button = (props) => {
  const { title, outline, children, color } = props
  return (
    <BTN {...props} color={color} outline={outline}>{title || children}</BTN>
  )
}

Button.propTypes = {
  title: string,
  outline: bool,
  children: string,
  color: string,
}

Button.defaultProps = {
  title: '',
  outline: false,
  children: '',
  color: BTN_COLOR,
}

export default Button
