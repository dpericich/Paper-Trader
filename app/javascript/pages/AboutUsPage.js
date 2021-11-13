import React from 'react';
import styled from 'styled-components';
import Header from '../components/pageBasics/Header';
import Footer from '../components/pageBasics/Footer';
import Paragraph from '../components/pageBasics/Paragraph';
import { aboutUs } from '../components/data/aboutUsData';

const AboutUsPage = () => {
  const Wrapper = styled.div`
    width: 50%;
    margin: 1rem auto;
  `

  const paragraphsText = aboutUs.map((paragraph) => {
    return(
       <Paragraph paragraphText={paragraph} />
    )
  })

  return(
    <>
      <Header />
        <Wrapper>
          <h3>About Us</h3>
          {paragraphsText}
        </Wrapper>
      <Footer />
    </>
  )
};

export default AboutUsPage;
