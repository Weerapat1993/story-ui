import React from 'react'
import { oneOfType, func, string, element, node } from 'prop-types'
import styled from 'styled-components'

const Footer = styled.div`
  background: white;
  color: black;
  border: 1px solid #d8d8d8;
`

export const FooterLarge = (props) => (
  <Footer>{props.children}</Footer>
)

FooterLarge.propTypes = {
  children: oneOfType([
    func,
    string,
    element,
    node,
  ])
}

FooterLarge.defaultProps = {
  children: ''
}


