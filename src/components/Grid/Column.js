import React from 'react'
import { func, number, element, node, oneOfType } from 'prop-types'
import styled from 'styled-components'

export const Column = styled.div`
  flex: ${props => props.count};
  flex-direction: column;
`

export const Col = ({ count, direction, children }) => (
  <Column direction={direction} count={count}>{children}</Column>
)

Col.propTypes = {
  count: number,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

Col.defaultProps = {
  count: 1,
  children: ''
}

