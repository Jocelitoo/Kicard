import CreditCard from '@/components/creditcard';
import { Handshake, Headset, ShieldCheck, TrendingDown } from 'lucide-react';

export const Advantages = () => {
  return (
    <section id="vantagens" className="scroll-mt-24">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex flex-col items-center gap-8">
        <h2 className="bg-cardBlue rounded-lg px-4 py-2">Vantagens</h2>

        <div className="flex flex-col justify-center gap-8 md:gap-16 sm:flex-row">
          {/* Left */}
          <div className="hidden sm:flex flex-col justify-between gap-32 ">
            <div className="flex flex-col items-center text-center gap-2">
              <Headset size={64} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Atendimento especializado</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <TrendingDown
                size={64}
                className="bg-cardBlue rounded-full p-2"
              />

              <p className="text-xs text-gray-600">Taxas mais baixas</p>
            </div>
          </div>

          {/* Cartão de crédito */}
          <div className="w-full my-auto">
            <CreditCard />
          </div>

          {/* Right */}
          <div className="hidden sm:flex flex-col justify-between gap-32">
            <div className="flex flex-col items-center text-center gap-2">
              <Handshake size={64} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Transparência</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck size={64} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Segurança</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            <div className="flex flex-col items-center text-center gap-2">
              <Headset size={48} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Atendimento especializado</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <TrendingDown
                size={48}
                className="bg-cardBlue rounded-full p-2"
              />

              <p className="text-xs text-gray-600">Taxas mais baixas</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <Handshake size={48} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Transparência</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck size={48} className="bg-cardBlue rounded-full p-2" />

              <p className="text-xs text-gray-600">Segurança</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 w-full text-center">
          <p className="text-xs text-gray-500">*Imagem meramente ilustrativa</p>
        </div>
      </div>
    </section>
  );
};
