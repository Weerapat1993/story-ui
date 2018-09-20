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

export const Row = (props) => (
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
