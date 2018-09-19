import React from 'react'
import { func, number, element, node, oneOfType } from 'prop-types'
import styled from 'styled-components'

export const Column = styled.div`
  flex: ${props => props.flex};
  flex-direction: column;
`

export const Col = ({ flex, children }) => (
  <Column flex={flex}>{children}</Column>
)

Col.propTypes = {
  flex: number,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

Col.defaultProps = {
  flex: 1,
  children: ''
}

