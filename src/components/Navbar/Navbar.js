import React from 'react';
import { func, element, node, oneOfType, string, array } from 'prop-types';
import styled from 'styled-components';
import { NavbarItem } from './NavbarItem';

const NavbarHeader = styled.nav`
  background: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Navbar = (props) => (
  <NavbarHeader {...props}>
    {
      props.data.map((item) => (
        <NavbarItem {...props} key={item.key} href={item.link}>{item.text}</NavbarItem>
      ))
    }
  </NavbarHeader>
);

Navbar.propTypes = {
  data: array,
  bgColor: string,
  children: oneOfType([
    func,
    element,
    node,
  ])
};

Navbar.defaultProps = {
  data: [],
  bgColor: '#4e1f66',
  children: '',
};
