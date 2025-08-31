import banner from '@/assets/images/banner3.png';
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
    // <section className="bg-[#00D9D2]">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24 flex items-center gap-8">
    //     <div className="w-full sm:w-1/2 max-w-xl text-center sm:text-left">
    //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
    //         Empréstimo consignado com parcelas que cabem no seu bolso
    //       </h1>

    //       <p className="mt-4 text-lg sm:text-xl text-gray-800">
    //         Simples, seguro e desconto direto na folha.
    //       </p>

    //       <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
    //         <Button size={'lg'} asChild>
    //           <a href="/contato">Fale com um consultor</a>
    //         </Button>
    //       </div>

    //       <p className="mt-3 text-sm text-gray-700">
    //         Simule em 2 minutos • Sem burocracia
    //       </p>
    //     </div>

    //     {/* Variação 1 */}
    //     <div className="hidden sm:block sm:w-1/2 relative ">
    //       <img
    //         src={heroImage}
    //         alt="Casal sorrindo, representando clientes"
    //         className="w-full max-w-md ml-auto shadow-lg rounded-md "
    //       />
    //     </div>

    //     {/* Variação 2 */}
    //     {/* <div className="hidden sm:block sm:w-1/2 relative rounded-2xl p-1 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] overflow-hidden">
    //       <img
    //         src={heroImage}
    //         alt="Casal sorrindo"
    //         className="block rounded-xl"
    //       />
    //     </div> */}

    //     {/* Variação 3 */}
    //     {/* <div className="hidden sm:block sm:w-1/2 relative rounded-2xl p-1 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
    //       <img
    //         src={heroImage}
    //         alt="Casal sorrindo"
    //         className="block rounded-xl bg-white"
    //       />
    //     </div> */}
    //   </div>
    // </section>

    <section id="hero" className="px-4 sm:px-8 lg:px-10">
      <img
        src={banner}
        alt="Casal abraçado"
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
