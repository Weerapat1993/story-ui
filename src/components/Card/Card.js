import React from 'react'
import { string, oneOfType, node, func, element, number } from 'prop-types'
import styled from 'styled-components'
import { FONT_BASE } from '../../styles/variables'

export const CardPlate = styled.div`
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  box-shadow: '0px 5px 10px rgba(0,0,0,0.2)';
`

export const CardTitle = styled.div`
  font-family: ${FONT_BASE};
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? '#fff' : '#333'};
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px 10px 15px;
  border-radius: 5px 5px 0 0;
  border-bottom-color: ${props => props.color || '#999'};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: ${props => props.color || 'transparent'};
  box-shadow: '0px 5px 10px rgba(0,0,0,0.2)';
`

export const CardBody = styled.div`

  border: 1px solid #ccc;
  border-top: 0px;
  border-radius: 0 0 5px 5px;
  box-shadow: '0px 5px 10px rgba(0,0,0,0.2)';
`

export const Body = styled.div`
  padding: 15px;
`

export const CardFooter = styled.div`
  border-top: 1px solid #ccc;
  box-shadow: '0px 5px 10px rgba(0,0,0,0.2)';
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardTitleActions = styled.div`
  font-family: ${FONT_BASE};
  font-size: 16px;
  font-weight: bold;
  color: white;
`

export const Flex = styled.div`
  flex: 1;
`

const Card = (props) => {
  const { title, children, color, actions, width, footer } = props
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
        <Body>
          {children}
        </Body>
        {
          footer && (
            <CardFooter>
              {footer()}
            </CardFooter>  
          )
        }
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
  footer: func
}

Card.defaultProps = {
  title: '',
  children: null,
  color: '',
  actions: () => null,
  width: 0,
  footer: () => null
}

export default Card
