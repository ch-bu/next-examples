import React, { Component } from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  box-shadow: 7px 6px 29px 1px rgba(112,21,112,0.57);
  min-height: 50px;
  align-items: stretch;
  
  a {
    text-decoration: none;
    color: purple;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    &:hover {
      background-color: #ccc;
    }
  }
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
        <Link href="/me">
          <a>Me</a>
        </Link>
      </HeaderContainer>
    );
  }
}

export default Header