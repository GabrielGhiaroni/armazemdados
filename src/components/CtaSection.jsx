import React from 'react';

import { ctaData } from '../data';

import {BsArrowRight} from 'react-icons/bs';

const CtaSection = () => {
  const {titulo, subtitulo, botaoTexto1, botaoTexto2} = ctaData;

  return (
    <section data-aos='fade-up' className='mb-[150px]'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-center items-center'>
          <div className='py-12 text-center'>
            <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>{titulo}</h2>
            <p className='lead' data-aos='fade-up'>{subtitulo}</p>
          </div>
          <div className='flex flex-col xl:flex-row gap-y-4 gap-x-[30px]'>
            <button className='btn btn-secondary' data-aos='fade-up' data-aos-delay='300'>{botaoTexto1}</button>
            <button className='btn btn-quaternary flex items-center gap-x-[20px] group' data-aos='fade-up' data-aos-delay='400'>{botaoTexto2} <BsArrowRight className='text-2xl text-accent-primary transition group-hover:text-white'/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection;