import { Button } from '@/components/ui/button';
import { Banknote, Clock, Map, Users2 } from 'lucide-react';

const iconCss = 'rounded-full p-2 bg-projectGreen';

const elements = [
  {
    icon: <Map size={60} className={iconCss} />,
    text: '+ 20 Convênios no Brasil',
  },
  {
    icon: <Banknote size={60} className={iconCss} />,
    text: '+ 20 Milhões de crédito',
  },
  {
    icon: <Users2 size={60} className={iconCss} />,
    text: '+ 5 Mil clientes',
  },
  {
    icon: <Clock size={60} className={iconCss} />,
    text: '+ 2 Anos no mercado',
  },
];

export const Achievements = () => {
  return (
    // <section className="flex justify-between max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto">
    //   {elements.map((element, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center gap-4 p-4 rounded-lg bg-cardBlue shadow-lg "
    //       >
    //         <div className="border p-1 rounded-full bg-white">
    //           {element.icon}
    //         </div>
    //         <p className="uppercase">{element.text}</p>
    //       </div>
    //     );
    //   })}
    // </section>

    <section className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto grid lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start ">
        <h2 className="bg-cardBlue py-2 px-4 rounded-lg w-fit ">
          Sobre a Kicard
        </h2>

        <h2 className="font-semibold text-3xl text-gray-900">
          Confiança e inovação para o seu futuro
        </h2>

        {/* <p className="text-gray-800">
          Na Kicard entregamos crédito consignado com foco em acessibilidade,
          segurança e inovação. Trabalhamos para que nossos processos sejam
          simples, rápidos e claros — sem letras miúdas. Nossa prioridade é a
          confiança do cliente: atendimento humano, tecnologia confiável e total
          transparência nas condições. Estamos sempre prontos para ajudar você a
          encontrar a solução financeira ideal.
        </p> */}

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
          <a href="#">Simule seu crédito</a>
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
