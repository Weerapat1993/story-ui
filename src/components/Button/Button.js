import React from 'react'
import styled from 'styled-components'

const BTN = styled.button`
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

export default Button
