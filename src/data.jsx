// import icons
import {
  FaYoutube,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import {
  BsChatDotsFill
} from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [{
    name: 'Sobre',
    href: '#home',
  },
  {
    name: 'Ajuda',
    href: '#home',
  },
  {
    name: 'Features',
    href: '#home',
  },
  {
    name: 'Cadastre-se',
    href: '#home',
  },
];

export const heroData = {
  titulo: `Seus dados protegidos 24h por dia.`,
  subtitulo: 'Confie os dados da sua empresa a quem é referência em segurança no mundo inteiro.',
  textoBotao: 'Saiba mais',
  imagem: HeroImage,
};

export const aboutData = {
  imagem: AboutImg,
  titulo: 'Especialistas em cybersecurity',
  subtitulo: 'Acesse seus dados com segurança a qualquer momento, de qualquer lugar do mundo, através de uma senha.',
};

export const featuresData = {
  titulo: 'Por que nós?',
  subtitulo: 'Nossos diferenciais que nos tornam referência no mundo.',
  lista: [{
      imagem: Feature1Img,
      bgImagem: Feature1BgImg,
      titulo: 'Busca por dados',
      descricao: 'Ferramenta de busca para otimizar o seu tempo.',
      linkTexto: 'Saiba mais',
      delay: '400',
    },
    {
      imagem: Feature2Img,
      bgImagem: Feature2BgImg,
      titulo: 'Acesso 24 horas',
      descricao: 'Acesso remoto 24h por dia, de qualquer lugar do mundo.',
      linkTexto: 'Saiba mais',
      delay: '700',
    },
    {
      imagem: Feature3Img,
      bgImagem: Feature3BgImg,
      titulo: 'Impressão grátis',
      descricao: 'Seus dados impressos? Assumimos o custo.',
      linkTexto: 'Saiba mais',
      delay: '1000',
    },
    {
      imagem: Feature4Img,
      bgImagem: Feature4BgImg,
      titulo: '100% seguro',
      descricao: 'Acesso a seus dados mediante fornecimento de senha.',
      linkTexto: 'Saiba mais',
      delay: '1300',
    },
  ],
};

export const ctaData = {
  titulo: 'Teste grátis!',
  subtitulo: '7 dias de assinatura premium',
  botaoTexto1: 'Saiba mais',
  botaoTexto2: 'Testar demonstração',
};

export const footerData = {
  logo: LogoV2,
  address: 'Rua do Imaginário, 123',
  email: 'exemplo@exemplo.com',
  phone: '21 99999-9999',
  list1: [{
      name: 'Cadastre-se',
      href: '#home',
    },
    {
      name: 'Serviços',
      href: '#home',
    },
    {
      name: 'Carreiras',
      href: '#home',
    },
    {
      name: 'Newsletter',
      href: '#home',
    },
  ],
  list2: [{
      name: 'Suporte',
      href: '#home',
    },
    {
      name: 'Tutorial',
      href: '#home',
    },
    {
      name: 'Reports',
      href: '#home',
    },
    {
      name: 'WhatsApp',
      href: '#home',
    },
  ],
  socialList: [{
      icon: < FaYoutube /> ,
      href: '#home',
    },
    {
      icon: < FaInstagram /> ,
      href: '#home',
    },
    {
      icon: < FaGithub /> ,
      href: '#home',
    },
  ],
};

export const copyrightData = {
  texto: '© Datawarehouse™, 2022. Todos os direitos reservados.',
  icone: < BsChatDotsFill /> ,
};