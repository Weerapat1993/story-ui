import React from 'react'
import { func, element, node, oneOfType } from 'prop-types'
import styled from 'styled-components'

export const RowStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 40.0rem) {
    flex-direction: row;
  }
`

export const RowStyleReverse = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 40.0rem) {
    flex-direction: column;
  }
`

export const Row = (props) => props.reverse ? (
  <RowStyleReverse {...props}>{props.children}</RowStyleReverse>
) : (
  <RowStyle {...props}>{props.children}</RowStyle>
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
