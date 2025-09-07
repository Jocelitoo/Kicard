import banner from '@/assets/images/banner.webp';
import { Button } from '@/components/ui/button';
import { phone } from '@/utils/phone';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se o usuário está acessando no desktop ou celular
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <section id="hero" className="px-4 sm:px-8 lg:px-10">
      <img
        src={banner}
        alt="Casal abraçado"
        width={606}
        height={520}
        className="absolute right-0 top-0 h-full w-3/5 object-cover object-right hidden lg:block"
      />

      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>

      <div className="relative z-30 p-8 text-center lg:text-start lg:max-w-lg space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-100">
          Empréstimo consignado com parcelas que cabem no seu bolso
        </h1>

        <p className="text-lg sm:text-xl text-gray-200">
          Simples, seguro e desconto direto na folha.
        </p>

        <Button
          size={'lg'}
          asChild
          className="bg-projectBlue text-black duration-300 hover:bg-projectBlueHover"
        >
          <a
            href={`https://${
              isMobile ? 'api' : 'web'
            }.whatsapp.com/send?phone=${phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com um consultor
          </a>
        </Button>

        <p className="text-sm text-gray-700">
          Simule em poucos minutos • Sem burocracia
        </p>
      </div>
    </section>
  );
};
