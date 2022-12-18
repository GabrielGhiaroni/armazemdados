import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import PorQueNos from './components/PorQueNos';

const App = () => {
  Aos.init({
    duration: 1800,
    offset: -50,
  })

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Sobre />
      <PorQueNos />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
