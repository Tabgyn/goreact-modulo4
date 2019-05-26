import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars3.githubusercontent.com/u/3709236?v=4" alt="avatar" />
      Tiago Azevedo Borges
    </User>
  </Container>
);

export default Header;
