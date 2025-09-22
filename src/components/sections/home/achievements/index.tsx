import { Button } from '@/components/ui/button';
import { phone } from '@/utils/phone';
import { Banknote, Clock, Map, Users2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const iconCss = 'rounded-full p-2 bg-projectGreen';

const elements = [
  {
    icon: <Map size={60} className={iconCss} />,
    text: 'Diversos convênios no Brasil',
  },
  {
    icon: <Banknote size={60} className={iconCss} />,
    text: 'Milhões de créditos gerados',
  },
  {
    icon: <Users2 size={60} className={iconCss} />,
    text: 'Inúmeros clientes atendidos',
  },
  {
    icon: <Clock size={60} className={iconCss} />,
    text: 'Experiência no mercado',
  },
];

export const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se o usuário está acessando no desktop ou celular
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <section
      id="sobre"
      className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto grid lg:grid-cols-2 gap-8 scroll-mt-30"
    >
      <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start ">
        <h2 className="bg-cardBlue py-2 px-4 rounded-lg w-fit ">
          Sobre a Kicard
        </h2>

        <h2 className="font-semibold text-3xl text-gray-900">
          Confiança e inovação para o seu futuro
        </h2>

        <p className="text-gray-800">
          A Kicard nasceu da vontade de tornar o crédito consignado mais simples
          e seguro. Sabemos o quanto decisões financeiras impactam a vida das
          pessoas — por isso criamos um serviço fácil de usar, com atendimento
          especializado e informações claras. Nossa tecnologia trabalha a favor
          da sua tranquilidade: simuladores rápidos, contratos objetivos e
          suporte disponível quando você precisar. Confiança, inovação e
          transparência guiam tudo o que fazemos para impactar positivamente o
          seu futuro.
        </p>

        <Button
          size={'lg'}
          asChild
          className="w-fit bg-projectBlue duration-300 hover:bg-projectBlueHover text-black"
        >
          <a
            href={`https://${
              isMobile ? 'api' : 'web'
            }.whatsapp.com/send?phone=${phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Simule seu crédito
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4  ">
        {elements.map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-4 rounded-lg bg-cardBlue shadow-lg "
            >
              <div className="border p-1 rounded-full bg-white">
                {element.icon}
              </div>

              <p className="text-gray-800">{element.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
