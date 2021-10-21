import React from 'react';
import Header from '../components/pageBasics/Header';
import Hero from '../components/home/Hero';
import Footer from '../components/pageBasics/Footer';
import FeaturesSection from '../components/home/FeaturesSection';
import LearnSection from '../components/home/LearnSection';

const HomePage = () => {
  return(
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <LearnSection />
      <Footer />
    </>
  )
}

export default HomePage;
