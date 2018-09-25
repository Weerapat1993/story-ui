import styled from 'styled-components'
import { number, string, oneOf } from 'prop-types'

export const Paragraph = styled.p`
  color: ${props => props.color || '#333'};
  font-size: ${props => props.size ? `${props.size}px` : '13px'};
  font-weight: ${props => props.type ? props.type : 'normal'};
  ${props => props.align ? `text-align: ${props.align}` : ''};
  padding: ${props => props.padding || '0'};
`

const ParagraphPropTypes = {
  color: string,
  size: number,
  type: string,
  align: oneOf(['left', 'center', 'right']),
  padding: string,
}

const ParagraphDefaultProps = {
  color: '',
  type: '',
  align: '',
  padding: '0',
}

Paragraph.propTypes = ParagraphPropTypes
Paragraph.defaultProps = ParagraphDefaultProps
