import React from 'react'
import { func, element, node, oneOfType } from 'prop-types'
import styled from 'styled-components'

export const RowStyle = styled.div`
  display: flex;
  flex-direction: 'row';
`

export const Row = ({ children }) => (
  <RowStyle>{children}</RowStyle>
)

Row.propTypes = {
  children: oneOfType([
    func,
    element,
    node,
  ])
}

Row.defaultProps = {
  children: ''
}
