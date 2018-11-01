import React from 'react'
import { func, element, node, oneOfType, string } from 'prop-types'
import styled from 'styled-components'

const LOGO = 'https://dfmukn6hiiik1.cloudfront.net/static/version1541005601/frontend/Central/default/th_TH/images/logo.svg'

const Title = () => (
  <a href="https://www.powerbuy.co.th/th/" title="Power Buy" target="_blank" rel="noopener noreferrer">
    <img src={LOGO} alt="Power Buy" width="245" height="65" />
  </a>
)

const AppHeader = styled.header`
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
const AppLogo = styled.div`
  padding: 15px;
  justify-content: flex-start;
`
const Width = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.value};
`

const Header = (props) => (
  <AppHeader {...props}>
    <AppLogo>
      <Title />
    </AppLogo>
    <Width value='100%'>
      {props.children}
    </Width>
  </AppHeader>
)

Header.propTypes = {
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

Header.defaultProps = {
  bgColor: '#4e1f66',
  title: 'Title',
  children: '',
}

export default Header