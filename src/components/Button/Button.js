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

const buttonSize = (props) => {
  switch(props.size) {
    case 'small':
      return '0.2em 0.4em'
    case 'medium':
      return '0.4em 0.8em'
    case 'large':
      return '0.5em 1em'
    default:
      return '0.4em 0.8em'
  }
}

export const BTN = styled(ButtonAnimate)`
  cursor: pointer;
  background: ${props => !props.outline ? props.color : "white"};
  color: ${props => !props.outline ? "white" : props.color};
  font-size: ${props => props.size === 'small' ? '0.8em' : '1em'};
  ${props => props.isActions ? 'margin: 0' : 'margin: 0.5em'};
  padding: ${buttonSize};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline && !props.isActions ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
`;

export const BtnNoAnimation = styled.button`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => !props.outline ? props.color : "white"};
  color: ${props => !props.outline ? "white" : props.color};
  font-size: ${props => props.size === 'small' ? '0.8em' : '1em'};
  ${props => props.isActions ? 'margin: 0' : 'margin: 0.5em'};
  padding: ${buttonSize};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline && !props.isActions ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  ${props => !props.outline && props.disabled ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  opacity: ${props => props.disabled ? '0.5' : '1'}
`;

const Button = (props) => {
  const { title, outline, children, color, isActions, size, disabled, onClick } = props
  return !isActions && !disabled ? (
    <BTN
      {...props}
      size={size}
      color={color} 
      outline={outline}
      isActions={isActions}
    >
      {title || children}
    </BTN>
  ) : (
    <BtnNoAnimation
      {...props}
      size={size}
      color={color} 
      outline={outline}
      isActions={isActions}
      disabled={disabled}
      onClick={disabled ? () => null : onClick}
    >
      {title || children}
    </BtnNoAnimation>
  )
}

Button.propTypes = {
  title: string,
  outline: bool,
  children: string,
  color: string,
  size: oneOf(['small', 'medium', 'large']),
  isActions: bool,
}

Button.defaultProps = {
  title: '',
  outline: false,
  children: '',
  color: BTN_COLOR,
  size: 'medium',
  isActions: false,
}

export default Button
