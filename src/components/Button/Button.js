import React from 'react'
import { string, bool, oneOf } from 'prop-types'
import posed from "react-pose";
import styled from "styled-components";

// Constants
export const BTN_COLOR = '#333'

const ButtonAnimate = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.05,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

export const BTN = styled(ButtonAnimate)`
  cursor: pointer;
  background: ${props => !props.outline ? props.color : "white"};
  color: ${props => !props.outline ? "white" : props.color};
  font-size: ${props => props.size === 'small' ? '0.8em' : '1em'};
  ${props => props.isLink ? 'margin: 0' : 'margin: 0.5em'};
  padding: ${props => props.size === 'small' ? '0.2em 0.4em' : '0.5em 1em'};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline && !props.isLink ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
`;

const Button = (props) => {
  const { title, outline, children, color, isLink, size } = props
  return (
    <BTN
      {...props}
      size={size}
      color={color} 
      outline={outline}
      isLink={isLink}
    >
      {title || children}
    </BTN>
  )
}

Button.propTypes = {
  title: string,
  outline: bool,
  children: string,
  color: string,
  size: oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  title: '',
  outline: false,
  children: '',
  color: BTN_COLOR,
  size: 'medium',
}

export default Button
