import React from 'react'
import { func, number, element, node, oneOfType, oneOf, string } from 'prop-types'
import styled from 'styled-components'

export const Column = styled.div`
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  text-align: ${props => props.align};
  padding: ${props => props.padding};
`

export const Col = (props) => {
  const { flex, flexDirection, children } = props
  return (
    <Column 
      {...props}
      flexDirection={flexDirection}
      flex={flex}
    >
      {children}
    </Column>
  )
}

Col.propTypes = {
  flex: number,
  flexDirection: oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  align: oneOf([
    'left',
    'center',
    'right',
  ]),
  padding: string,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

Col.defaultProps = {
  flex: 1,
  flexDirection: 'column',
  padding: '0',
  align: 'left',
  children: ''
}

