import React from 'react'
import { string } from 'prop-types'
import hexToRgba from 'hex-to-rgba'

const List = (props) => {
  const childrenWithExtraProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      borderColor: props.borderColor,
      bgColor: props.bgColor,
      highlightColor: props.highlightColor,
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
  textColor: string,
}

List.defaultProps = {
  borderColor: '#cccccc',
  bgColor: 'transparent',
  textColor: '#333333',
}

export default List
