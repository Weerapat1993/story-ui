import React from 'react'
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
import { func, number, string, element, oneOfType, bool, node } from 'prop-types'
import { Button } from '../Button'
import { Card } from '../Card'

const Fade = posed.div({
  fadeIn: {
    opacity: 1,
    height: '90%',
    transition: tween
  },
  fadeOut: {
    opacity: 0,
    height: '0%',
    transition: tween
  }
});

export const BlackPage = styled(Fade)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px;
`

const Modal = ({ onBlur, width, children, title, visible }) => (
  <BlackPage pose={visible ? "fadeIn" : "fadeOut"} onClick={onBlur}>
    <Card title={title} width={width} color='#333' footer={() => <Button title='OK' color={'green'} onClick={onBlur} />}>
      {children}
    </Card>
  </BlackPage>
)


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

Modal.defaultProps = {
  onBlur: () => null,
  width: 0,
  title: 'Modal',
  visible: false,
  children: null,
}

export default Modal