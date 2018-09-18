import React from 'react'
import styled from 'styled-components'
import { func, number, string, element, oneOfType, bool, node } from 'prop-types'
import { Card } from '../Card'

export const BlackPage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px;
`

const Modal = ({ onBlur, width, children, title, visible }) => visible ? (
  <BlackPage onClick={onBlur}>
    <Card title={title} width={width}>
      {children}
    </Card>
  </BlackPage>
) : null


Modal.propTypes = {
  onBlur: func,
  width: number,
  title: string,
  visible: bool,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

export default Modal