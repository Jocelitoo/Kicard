import { Header } from '@/components/header';

import { Achievements } from '@/components/sections/home/achievements';
import { Advantages } from '@/components/sections/home/advantages';
import { FAQ } from '@/components/sections/home/faq';
import { Hero } from '@/components/sections/home/hero';
import { Educational } from '@/components/sections/home/educational';
import { Logos } from '@/components/sections/home/logos';
import { Map } from '@/components/sections/home/map';
import { Products } from '@/components/sections/home/products';
import wpp from '@/assets/svgs/wpp.svg';

import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import { phone } from '@/utils/phone';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se o usuário está acessando no desktop ou celular
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      <Header />

      <main>
        <div className="space-y-8 lg:space-y-16">
          <Hero />
          <Logos />
          <Achievements />
          <Products />
          <Advantages />
          <Map />
          <Educational />
          <FAQ />
        </div>

        <a
          href={`https://${
            isMobile ? 'api' : 'web'
          }.whatsapp.com/send?phone=${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 bottom-5 z-50 size-12 lg:size-14 bg-black rounded-full flex items-center justify-center p-2 "
        >
          <img src={wpp} alt="Icone do Whatsapp" />
        </a>
      </main>

      <Footer />
    </>
  );
};
