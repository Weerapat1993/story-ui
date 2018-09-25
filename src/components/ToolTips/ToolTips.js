import React from 'react'
import { oneOfType, func, element, node, string } from 'prop-types'
import styled from 'styled-components'
import { FONT_BASE } from '../../styles/variables'

const Tips = styled.div`
  position: relative;
  display: inline-block;
`

const TipsPopover = styled.span`
  visibility: hidden;
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
  left: -150%;
  margin-left: -60px;
  opacity: 0;
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

  ${Tips}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

export const ToolTips = ({ children, tips }) => (
  <Tips>{children}<TipsPopover>{tips}</TipsPopover></Tips>
)

ToolTips.propTypes = {
  tips: string.isRequired,
  children: oneOfType([
    func,
    element,
    node,
    string
  ])
}

ToolTips.defaultProps = {
  children: ''
}

export default ToolTips