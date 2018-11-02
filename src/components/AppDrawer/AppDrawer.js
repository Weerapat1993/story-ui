import React, { PureComponent, Fragment } from 'react'
import { func, element, node, oneOfType, string, array } from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { tween } from 'popmotion'
import { Button } from '../Button'

const AppDrawerHeader = styled.header`
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const PageWihte = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  width: 0%;
  display: block;
  overflow-x: hidden;
  border-right: 1px solid #d1d1d1;
`
const Drawer = posed(PageWihte)({
  enter: { 
    width: '100%',
    transition: tween
  },
  exit: { 
    width: '0%',
    transition: tween
  },
  init: {
    width: '0%',
  }
});

const Shade = posed.div({
  enter: { 
    opacity: 1,
    transition: tween
  },
  exit: { 
    opacity: 0,
    transition: tween
  },
  init: {
    opacity: 0,
  }
});

const DrawerItem = styled.div`
  cursor: pointer;
  padding: 20px;
  border-top: 1px solid #d1d1d1;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: block;
  overflow-x: hidden;
  min-width: 300px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

class AppDrawer extends PureComponent {
  static propTypes = {
    data: array,
    onMenu: func,
    onClick: func,
  }

  static defaultProps = {
    data: [],
    onMenu: () => null,
    onClick: () => null,
  }

  state = { visible: false }

  setVisible = (value) => {
    this.setState({ visible: value })
  }

  handleClick = (item) => {
    this.props.onClick(item)
    this.setVisible(false)
  } 

  render() {
    const { title, data } = this.props
    const { visible } = this.state
    return (
      <Fragment>
        <AppDrawerHeader {...this.props}>
          <Button isActions onClick={() => this.setVisible(true)}>Menu</Button>
          <Flex />
          {title}
          <Flex />
          <Button isActions onClick={() => this.setVisible(true)}>Menu</Button>
        </AppDrawerHeader>
        <PoseGroup>
          {
            visible && (
              <Drawer key='drawer'>
                <Shade key='drawer'>
                  <div style={{ textAlign: 'right' }}>
                    <Button onClick={() => this.setVisible(false)}>X</Button>
                  </div>
                  {
                    data.map(item => (
                      <DrawerItem onClick={() => this.handleClick(item)} key={item.key}>{item.text}</DrawerItem>
                    ))
                  }
                </Shade>
              </Drawer>
            )
          }
        </PoseGroup>
      </Fragment>
    )
  }
}

AppDrawer.propTypes = {
  bgColor: string,
  title: oneOfType([
    func,
    element,
    node,
  ]),
  children: oneOfType([
    func,
    element,
    node,
  ])
}

AppDrawer.defaultProps = {
  bgColor: '#4e1f66',
  title: 'Title',
  children: '',
}

export default AppDrawer