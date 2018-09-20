import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styled from 'styled-components'

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
`

const TabContent = styled.div`
  border: 1px solid #d8d8d8;
  background: white;
  padding: 30px;
  border-radius: 0 0 5px 5px;
`

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div>
        <TabList>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabList>
        <TabContent>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </TabContent>
      </div>
    );
  }
}

export default Tabs;