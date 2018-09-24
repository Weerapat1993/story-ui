import styled from 'styled-components'

export const H1 = styled.h1`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '36px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`

export const H2 = styled.h2`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '24px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`

export const H3 = styled.h3`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '20px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`

export const H4 = styled.h4`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '16px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`