import React, { Component } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
    
const HeaderContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </HeaderContainer>
    );
  }
}

export default Header