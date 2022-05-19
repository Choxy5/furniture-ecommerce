import React from 'react';
import Footer from '../../components/Footer/Index';
import About from '../../section/About/Index';
import Collection from '../../section/Collection/Index';
import Contact from '../../section/Contact/Index';
import Gallery from '../../section/Gallery/Index';
import Hero from '../../section/Hero/Index';

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Collection />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
