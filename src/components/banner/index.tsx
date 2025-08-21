import banner from '@/assets/images/banner2.png';
import { Button } from '../ui/button';

export const Banner = () => {
  return (
    <div id="hero" className="">
      <img
        src={banner}
        alt="Promo"
        className="absolute right-0 top-0 h-full w-3/5 object-cover object-right hidden md:block"
      />

      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>

      <div className="relative z-30 max-w-lg p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-100">
          Empréstimo consignado com parcelas que cabem no seu bolso
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Simples, seguro e desconto direto na folha.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button size={'lg'} asChild>
            <a href="/contato">Fale com um consultor</a>
          </Button>
        </div>

        <p className="mt-3 text-sm text-gray-700">
          Simule em 2 minutos • Sem burocracia
        </p>
      </div>
    </div>
  );
};
