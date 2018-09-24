import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '13px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
`