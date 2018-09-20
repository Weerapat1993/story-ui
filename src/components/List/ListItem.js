import React from 'react'
import { string } from 'prop-types'
import posed from "react-pose";
import styled from 'styled-components'
import { FONT_BASE } from '../../styles/variables'

const ListAnimate = posed.li({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.025,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const List = styled(ListAnimate)`
  cursor: pointer;
  display: block;
  flex: 1;
  border: 1px ${props => props.borderColor} solid;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-left: -20px;
  margin-right: 20px;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
  font-family: ${FONT_BASE};
`

const ListItem = (props) => (
  <List {...props}>
    {props.children}
  </List>
)

ListItem.propTypes = {
  textColor: string,
  bgColor: string,
  borderColor: string,
}

ListItem.defaultProps = {
  textColor: '#333333',
  bgColor: 'transparent',
  borderColor: '#CCCCCC',
}

export default ListItem
