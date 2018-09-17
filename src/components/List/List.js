import React from 'react'
import './List.scss'

const List = (props) => (
  <ul {...props}>
    {props.children}
  </ul>
)

export default List
