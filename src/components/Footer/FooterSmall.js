import React from 'react'
import { oneOfType, func, string, element, node } from 'prop-types'
import styled from 'styled-components'

const CopyRight = styled.div`
  background: #f4f4f4;
  padding: 10px;
  color: black;
  font-size: 10px;
  text-align: center;
`

export const FooterSmall = (props) => (
  <CopyRight>{props.children}</CopyRight>
)

FooterSmall.propTypes = {
  children: oneOfType([
    func,
    string,
    element,
    node,
  ])
}

FooterSmall.defaultProps = {
  children: ''
}


