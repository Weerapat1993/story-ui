import React from 'react'
import { string } from 'prop-types'
import hexToRgba from 'hex-to-rgba'

const List = (props) => {
  const childrenWithExtraProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      borderColor: props.borderColor,
      bgColor: props.bgColor,
      highlightColor: props.highlightColor || props.bgColor ? hexToRgba(props.bgColor, 0.9) : '',
      textColor: props.textColor,
    });
  });
  return (
    <ul {...props}>
      {childrenWithExtraProp}
    </ul>
  )
}

List.propTypes = {
  borderColor: string,
  bgColor: string,
  highlightColor: string,
  textColor: string,
}

List.defaultProps = {
  borderColor: '#999',
  bgColor: 'transparent',
  highlightColor: '',
  textColor: '#333',
}

export default List
