import React from 'react';

import { Container, Header, Logo, MenuRight } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Header>
        <MenuRight />
      </Header>
    </Container>
  );
};

export default Navbar;
