import map from '@/assets/images/map.webp';
import { Button } from '@/components/ui/button';
import { Dot, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const states = [
  'São Paulo',
  'Rio de Janeiro',
  'Goiás',
  'Ceará',
  'Piauí',
  'Maranhão',
  'Rio grande do Norte',
  'Paraíba',
  'Pernambuco',
  'Alagoas',
  'Bahia',
  'Paraná',
];

export const Map = () => {
  const [showStates, setShowStates] = useState(false);
  return (
    <section className="bg-cardBlue">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto lg:grid grid-cols-2 gap-4">
        <div className="space-y-4 text-center pt-8 lg:text-start lg:pt-28">
          <p className="text-2xl lg:text-4xl font-semibold">
            Estamos presentes em vários estados do Brasil, providenciado o
            melhor atendimento e crédito seguro para milhões de brasileiros.
          </p>

          <Button
            size={'lg'}
            onClick={() => setShowStates(!showStates)}
            className="text-start w-full cursor-pointer flex gap-2 text-black bg-projectGreen hover:bg-projectGreenHover "
          >
            {showStates
              ? 'Ocultar lista de estados'
              : 'Conferir lista de estados'}

            <PlusCircle
              className={`transition-transform duration-300 ${showStates ? 'rotate-45' : 'rotate-0'}`}
            />
          </Button>

          <AnimatePresence>
            {showStates && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-md mb-8 overflow-hidden space-y-2 text-start"
              >
                {states.map((state, index) => (
                  <p key={index} className=" text-gray-600 flex">
                    <Dot /> {state}
                  </p>
                ))}

                <p className="text-gray-600 flex">
                  <Dot /> Outros estados em breve...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <img
          src={map}
          alt="Mapa do Brasil"
          loading="lazy"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};
