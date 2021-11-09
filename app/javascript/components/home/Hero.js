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

const TextWrapper = styled.div`
  background-color: #ffffff25;
  padding: 0rem 1rem;
  border-radius: 1rem;
`

const HeroText = styled.h3`
  color: #45A29E;
  font-size: 3rem;
  text-shadow: .1rem .1rem #000
`

const Hero = () => {
  return(
    <Wrapper>
      <TextWrapper>
        <HeroText>TRADE TO LEARN</HeroText>
      </TextWrapper>
    </Wrapper>
  )
};

export default Hero;
