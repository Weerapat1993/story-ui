import React, { Component } from 'react'
import { string, bool } from 'prop-types'
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
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
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
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 1em;
  border: 2px solid ${props => props.color};
  border-radius: 8px;
  ${props => !props.outline ? 'border-bottom: 3px solid rgba(0, 0, 0, 0.2);' : ''}
  
  &:hover {
    border-bottom: ${props => props.outline ? 2 : 3}px solid ${props => props.color};
  }
`;

class Button extends Component {
  state = { hovering: false }

  render() {
    const { title, outline, children, color } = this.props
    return (
      <BTN
      {...this.props}
      color={color} 
      outline={outline}>{title || children}</BTN>
    )
  }
}

// const Button = (props) => {
//   const { title, outline, children, color } = props
//   return (
//     <BTN
//       pose={this.state.hovering ? "hovered" : "idle"}
//       onMouseEnter={() => this.setState({ hovering: true })}
//       onMouseLeave={() => this.setState({ hovering: false })}
//       color={color} 
//       outline={outline}>{title || children}</BTN>
//   )
// }

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
