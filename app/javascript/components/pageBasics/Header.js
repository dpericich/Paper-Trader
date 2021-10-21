import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space_between;
  align-items: center;
  padding: .3rem 0;
  background: #45A29E;
  font-size: 3rem;

`

const HeaderNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`

const PageTitle = styled.div`
  margin: .5rem;

  a {
    font-size: 5rem;
    text-decoration: none;

    &:visited {
      color: #000;
    }
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;

  &,
  &:visited {
    color: #000;
  }

  &:hover,
  &:active {
    color: #fff;
  }
`

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  padding-right: 1rem;
`

const ButtonPrimary = styled.div`
  background: #45A29E;
  font-size: 1.7rem;
  padding: .4rem 1.5rem;
  margin: .5rem;

  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  a:hover,
  a:active {
    color: #fff;
  }
`

const ButtonSecondary = styled.div`
  background: #C5C6C7;
  font-size: 1.7rem;
  padding: .4rem 1.3rem;
  margin: .5rem;
  border-radius: 5rem;
  text-decoration: none;
  border: solid .3rem #C5C6C7;

  &:hover,
  &:active {
    background: #45A29E;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #45A29E;
  }

  a:hover,
  a:active {
    color: #C5C6C7;
  }
`

const Header = () => {
  return(
    <Wrapper>
      <HeaderNavigation>
        <PageTitle>
          <Link to="/">Paper Trader</Link>
        </PageTitle>
        <span>
          <HeaderLink to="/stocks">Trade</HeaderLink>
        </span>
        <span>
          <HeaderLink to="/articles">Blog</HeaderLink>
        </span>
      </HeaderNavigation>
      <ActionButtons>

        <ButtonPrimary>
          <Link to="/">Log In</Link>
        </ButtonPrimary>
        <ButtonSecondary>
          <Link to="/">Sign Up</Link>
        </ButtonSecondary>
      </ActionButtons>
    </Wrapper>
  )
};

export default Header;
