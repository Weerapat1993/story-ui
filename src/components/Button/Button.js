import React from 'react'
import { string, bool, oneOf, func, number } from 'prop-types'
import styled from 'styled-components'

// Constants
export const BTN_COLOR = '#333'

const buttonSize = (props) => {
  switch (props.size) {
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

export const BTN = styled.button`
  cursor: pointer;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  background: ${props => !props.outline ? props.color : 'white'};
  color: ${props => !props.outline ? props.textColor : props.color};
  font-size: ${props => props.size === 'small' ? '0.8em' : '1em'};
  ${props => props.isActions ? 'margin: 0' : 'margin: 0.5em'};
  padding: ${props => props.padding || buttonSize};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline && !props.isActions ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
`;

export const BtnNoAnimation = styled.button`
  cursor: ${props => props.disabled || props.loading ? 'not-allowed' : 'pointer'};
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  background: ${props => !props.outline ? props.color : 'white'};
  color: ${props => !props.outline ? props.textColor : props.color};
  font-size: ${props => props.size === 'small' ? '0.8em' : '1em'};
  ${props => props.isActions ? 'margin: 0' : 'margin: 0.5em'};
  padding: ${props => props.padding || buttonSize};
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline && !props.isActions ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  ${props => !props.outline && (props.disabled || props.loading) ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  opacity: ${props => props.disabled ? '0.5' : '1'};
`;

const Button = (props) => {
  const { title, outline, children, color, isActions, size, disabled, onClick, loading } = props
  return !isActions && !disabled && !loading ? (
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
      {loading ? 'Lodaing ...' : title || children}
    </BtnNoAnimation>
  )
}

Button.propTypes = {
  title: string,
  outline: bool,
  children: string,
  color: string,
  textColor: string,
  padding: string,
  size: oneOf(['small', 'medium', 'large']),
  isActions: bool,
  disabled: bool,
  loading: bool,
  onClick: func,
  width: number,
  height: number,
}

Button.defaultProps = {
  title: '',
  outline: false,
  children: '',
  color: BTN_COLOR,
  textColor: 'white',
  size: 'medium',
  padding: '',
  isActions: false,
  disabled: false,
  loading: false,
  onClick: () => null,
  width: 0,
  height: 0,
}

export default Button
