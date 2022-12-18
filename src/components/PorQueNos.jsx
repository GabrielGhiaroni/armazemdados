import React from 'react';

import {featuresData} from '../data';

import {BsArrowRight} from 'react-icons/bs';

const PorQueNos = () => {
  const {titulo, subtitulo, lista} = featuresData;

  return (
    <section className='mt-[90px] mb-[0px] lg:mt-[70px] xl:my-[150px]'>
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2 mb-6 xl:mb-12' data-aos='fade-down' data-aos-delay='100'>{titulo}</h2>
          <p className='lead max-w-[584px] mx-auto mb-8 xl:mb-16' data-aos='fade-down' data-aos-delay='200'>{subtitulo}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2px] lg:gap-[50px]'>
          {lista.map((item, index) => {
            const {imagem, bgImagem, titulo, descricao, linkTexto, delay} = item;
            
            return (
              <div className='w-full h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index} data-aos='zoom-in' data-aos-offset='100' data-aos-delay={delay}>
                <div className='hidden lg:flex absolute top-0 right-0 -z-10'>
                  <img src={bgImagem} alt="" />
                </div>
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[232px] mb-2' data-aos='zoom-in-right' data-aos-delay={delay}>
                  <img src={imagem} alt={titulo} />
                </div>
                <div className='max-w-[220px]'>
                  <h3 className='h3 mb-4 text-center'>{titulo}</h3>
                  <p className='font-light italic mb-4 text-center'>{descricao}</p>
                  <div className='flex items-center gap-x-2 group justify-center'>
                    <a href="#home" className='text-primary font-bold'>{linkTexto}</a>
                    <BsArrowRight className='text-xl text-accent-primary transition-all group-hover:ml-[5px]'/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PorQueNos;