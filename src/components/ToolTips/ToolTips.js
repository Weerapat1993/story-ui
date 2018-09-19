import React from 'react'
import { oneOfType, func, element, node, string } from 'prop-types'
import './styles.css'

export const ToolTips = ({ children, tips }) => (
  <div class="tooltip">{children}<span class="tooltiptext">{tips}</span></div>
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