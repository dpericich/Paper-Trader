import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutUsPage from '../../pages/AboutUsPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  background: #45A29E;
  padding: .3rem 0;
  color: #000;
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &,
  &:visited {
    color: #000;
  }

  &:hover,
  &:active {
    color: #fff;
  }
`

const Footer = () => {
  return(
    <Wrapper>
      <span>
        <StyledLink to="/">Paper Trader</StyledLink>
      </span>
      <span>
        <StyledLink to="/about-us">About Us</StyledLink>
      </span>
      <p>&copy;2021 Paper Trader</p>
    </Wrapper>
  )
};

export default Footer;
