import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { FONT_BASE } from '../../styles/variables'

const TabListItem = styled.li`
  cursor: pointer;
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  border: solid #d8d8d8;
  border-width: 1px 1px 0 1px;
  border-radius: 10px 10px 0 0;
  background: #f0f0f0;
  text-align: center;
  font-family: ${FONT_BASE};
  font-weight: bold;
  flex: 1;
`

const TabListItemActive = styled(TabListItem)`
  cursor: pointer;
  background-color: #a90006;
  border: solid #d8d8d8;
  border-width: 1px 1px 0 1px;
  border-radius: 10px 10px 0 0;
  color: white;
`

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { activeTab, label } = this.props
    const TabItem = activeTab === label ? TabListItemActive : TabListItem;
    return (
      <TabItem onClick={this.handleClick}>
        {label}
      </TabItem>
    );
  }
}


export default Tab;