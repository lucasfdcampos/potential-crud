import React from 'react';

import { Container, Header, Logo, MenuRight } from './styles';

import logoImg from '../../assets/gazin-logo.svg';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <MenuRight>
          <span>Lucas Campos</span>&nbsp;
          <p>Sair</p>
        </MenuRight>
      </Header>
    </Container>
  );
};

export default Navbar;
