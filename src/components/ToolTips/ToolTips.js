import React from 'react'
import { oneOfType, func, element, node, string, bool } from 'prop-types'
import posed from 'react-pose'
import { tween } from 'popmotion'
import styled from 'styled-components'
import { FONT_BASE } from '../../styles/variables'

// Animations
const Animation = posed.span({
  fadeIn: {
    opacity: 1,
    width: 160,
    transition: tween,
  },
  fadeOut: {
    opacity: 0,
    width: 0,
    transition: tween,
  }
})


const Tips = styled.div`
  position: relative;
  display: inline-block;
`

const TipsPopover = styled(Animation)`
  width: 160px;
  height: 46px;
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 0%;
  left: -160%;
  margin-left: -60px;
  transition: opacity 0.3s;
  font-family: ${FONT_BASE};
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
  border: 1px solid #eee;
  border-bottom: 0px solid #eee;

  &::after {
    content: "";
    position: absolute;
    top: 25%;
    right: -12%;
    transform: rotate(-90deg);
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
`

export const ToolTips = ({ children, tips, visible }) => (
  <Tips>{children}<TipsPopover pose={visible ? "fadeIn" : "fadeOut"} visible={visible}>{visible && tips}</TipsPopover></Tips>
)

ToolTips.propTypes = {
  tips: string.isRequired,
  children: oneOfType([
    func,
    element,
    node,
    string
  ]),
  visible: bool,
}

ToolTips.defaultProps = {
  children: '',
  visible: false,
}

export default ToolTips