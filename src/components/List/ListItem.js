import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const List = styled.li`
  display: block;
  border: 1px #999 solid;
  border-bottom: 0px;
  padding: 15px;
  margin-left: -40px;
  color: ${props => props.color};

  &:hover {
    background: #ddd;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-bottom: 1px #999 solid;
    border-radius: 0 0 5px 5px;
  }
`

const ListItem = (props) => (
  <List {...props}>
    {props.children}
  </List>
)

ListItem.propTypes = {
  color: string,
}

ListItem.defaultProps = {
  color: '#333'
}

export default ListItem
