import React from 'react';
import styled from 'styled-components';
import background_image from '../../../assets/images/background.jpg'

// Have the hero be 2 column with left column being text of "Risk Free Investing"
// Mitigate risks by running loss free trades on our site. Try your strategies here before investing your real money
// The right column will be some svg or cool stock picture

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
  overflow: hidden;
  width: 100%;
  background-image: url(${background_image});
  background-position: center;

  @media (max-width: 900px) {
    height: 40vh;
  }

  @media (max-width: 600px) {
    height: 30vh;
  }

  @media (max-width: 300px) {
    height: 40vh;
  }
`

const HeroText = styled.h3`
  color: #fff;
  font-size: 3rem;
  text-shadow: .3rem .3rem #000
`

const Hero = () => {
  return(
    <Wrapper>
      <HeroText>Practice. Learn. Grow</HeroText>
    </Wrapper>
  )
};

export default Hero;
