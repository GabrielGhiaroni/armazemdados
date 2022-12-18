import React from 'react';

import { heroData } from '../data';

import Header from './Header';

const Hero = () => {
  const {titulo, subtitulo, textoBotao, imagem} = heroData;

  return (
    <section id='hero' className='lg:h-[900px] py-12'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          <div className='text-center xl:text-left xl:absolute'>
            <h1 className='h1 xl:max-w-[700px] mb-6 xl:mb-12' data-aos='fade-down' data-aos-delay='400'>{titulo}</h1>
            <p className='lead xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subtitulo}</p>
            <button className='btn btn-primary mb-12 xl:mb-0' data-aos='fade-down' data-aos-delay='600'>{textoBotao}</button>
          </div>
          <div className='xl:absolute xl:-right-12 xl:bottom-16' data-aos='fade-up' data-aos-delay='700'>
            <img src={imagem} alt="imagem hero" className='xl:max-w-[850px]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;