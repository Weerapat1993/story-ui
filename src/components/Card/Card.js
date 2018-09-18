import React from 'react'
import { string, oneOfType, node, func, element, number } from 'prop-types'
import styled from 'styled-components'

export const CardPlate = styled.div`
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.color || '#333'};
  background-color: #fff;
  margin-bottom: 10px;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
`

export const CardTitle = styled.div`
  font-family: Tahoma;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? '#fff' : '#333'};
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px 10px 15px;
  border-bottom-color: ${props => props.color || '#333'};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: ${props => props.color || 'transparent'};
`

export const CardBody = styled.div`
  padding: 15px;
`

export const CardTitleActions = styled.div`

`

export const Flex = styled.div`
  flex: 1;
`


const Card = (props) => {
  const { title, children, color, actions, width } = props
  return (
    <CardPlate color={color} width={width}>
      <CardHeader color={color}>
        <CardTitle color={color}>{title}</CardTitle>
        <Flex />
        <CardTitleActions>
          {actions()}
        </CardTitleActions>
      </CardHeader> 
      <CardBody>
        {children}
      </CardBody>
    </CardPlate>
  )
}

Card.propTypes = {
  title: oneOfType([
    string,
    node,
    func,
    element,
  ]),
  children: oneOfType([
    node,
    func,
    element,
  ]),
  color: string,
  actions: func,
  width: number,
}

Card.defaultProps = {
  title: '',
  children: null,
  color: '',
  actions: () => null,
  width: 0,
}

export default Card
