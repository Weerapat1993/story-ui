import React, { Fragment } from 'react';
import { Header, Navbar, HideMobile, HideDesktop, AppDrawer } from '../../index';
import Footer from './Footer';

const BG_COLOR = 'linear-gradient(258deg, #83409e, #4c1e64)';
const LOGO = 'https://dfmukn6hiiik1.cloudfront.net/static/version1541005601/frontend/Central/default/th_TH/images/logo.svg'

const Title = () => (
  <a href="https://www.powerbuy.co.th/th/" title="Power Buy" target="_blank" rel="noopener noreferrer">
    <img src={LOGO} alt="Power Buy" width="165" height="44" />
  </a>
);

const Layout = (props) => (
  <Fragment>
    <HideMobile>
      <Header bgColor={BG_COLOR}>
        <Navbar data={props.menus} bgColor="#4e1f66" />
        <Navbar
          data={props.menus.slice(0, 3)}
          bgColor='#eaeaea'
          color='#333'
          isUnderline
          isLine
          lineColor='#bebebe'
        />
      </Header>
      <div style={{ height: 175 }} />
    </HideMobile>
    <HideDesktop>
      <AppDrawer
        bgColor={BG_COLOR}
        title={<Title />}
        data={props.menus}
      />
      <div style={{ height: 60 }} />
    </HideDesktop>
    {props.children}
    <Footer />
  </Fragment>
);

export default Layout;
