import React from 'react'

const ListItem = (props) => (
  <li className={`mt-list-item ${props.className}`} {...props}>
    {props.children}
  </li>
)

export default ListItem
