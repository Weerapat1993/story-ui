import React from 'react'
import posed from "react-pose";
import styled from "styled-components";
import { func, number, string, element, oneOfType, bool, node } from 'prop-types'
import { Button } from '../Button'
import { Card } from '../Card'
import BLACK_CLOSE_MODAL from './assets/images/black-close-modal.png'

// Animations
const Animation = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 500 }
  },
  fadeOut: {
    opacity: 0,
    transition: { duration: 500 }
  }
}

const BlackPageFade = posed.div(Animation);

export const BlackPage = styled(BlackPageFade)`
  display: ${props => props.visible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.8);
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
const styles = {
  size: (width, height) => ({
    width,
    height: height || width
  }),
  textRight: {
    textAlign: 'right',
  }
}

const Modal = ({ onClose, width, children, title, visible, footer }) => (
  <BlackPage pose={visible ? "fadeIn" : "fadeOut"} visible={visible}>
    <ModalMain>
      <Card
        isBorder={false}
        title={title}
        width={width}
        color='#333'
        actions={() => <Button title='X' size='small' isActions onClick={onClose} />}
        footer={footer}
      >
        {
          !title && (
            <div style={styles.textRight}>
              <Button color='white' size='small' isActions onClick={onClose}>
                <img src={BLACK_CLOSE_MODAL} alt='Close Modal' style={styles.size(15)} />
              </Button>
            </div>
          )
        }
        {children}
      </Card>
    </ModalMain>
  </BlackPage>
)


Modal.propTypes = {
  onClose: func,
  width: number,
  title: string,
  visible: bool,
  children: oneOfType([
    func,
    element,
    node,
  ]),
  footer: func,
}

Modal.defaultProps = {
  onClose: () => null,
  width: 0,
  title: '',
  visible: false,
  children: null,
  footer: null,
}

export default Modal