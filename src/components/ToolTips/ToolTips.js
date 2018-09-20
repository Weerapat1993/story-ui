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
  width: 120px;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-family: ${FONT_BASE};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }

  ${Tips}:hover & {
    visibility: visible;
    opacity: 0.9;
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