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
    transition: tween
  },
  fadeOut: {
    opacity: 0,
    transition: tween
  }
});

export const BlackPage = styled(Fade)`
  display: ${props => props.visible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px;
`

export const ModalMain = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

const Modal = ({ onBlur, width, children, title, visible }) => (
  <BlackPage pose={visible ? "fadeIn" : "fadeOut"} visible={visible}>
    <ModalMain>
      <Card 
        title={title}
        width={width}
        color='#333'
        actions={() => <Button title='X' size='small' isActions onClick={onBlur} />}
        footer={() => <Button title='OK' color={'green'} onClick={onBlur} />}
      >
        {children}
      </Card>
    </ModalMain>
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