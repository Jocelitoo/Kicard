import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { File, MessageSquare, PlusCircle, User2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type Category = {
  id: string;
  text: string;
  icon: React.ReactNode;
  faqs: FAQItem[];
};

export const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState('1');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories: Category[] = [
    {
      id: '1',
      text: 'Público',
      icon: <User2 />,
      faqs: [
        {
          question: 'O que é empréstimo consignado?',
          answer:
            'É um tipo de crédito em que as parcelas são descontadas diretamente da folha de pagamento ou benefício.',
        },
        {
          question: 'Quem pode contratar?',
          answer:
            'Aposentados, pensionistas do INSS, servidores públicos e trabalhadores de empresas conveniadas.',
        },
        {
          question: 'Qual a vantagem?',
          answer:
            'As taxas são menores, pois o desconto é feito direto na folha, diminuindo o risco de inadimplência.',
        },
      ],
    },
    {
      id: '2',
      text: 'Benefícios',
      icon: <File />,
      faqs: [
        {
          question: 'Quais são os benefícios do Crédito Consignado?',
          answer:
            'Saques possíveis com até 70% da margem disponível, seguro de vida, assistência funeral e descontos em farmácias e serviços de saúde (variam conforme decreto da prefeitura e O limite de desconto da folha de pagamento ajuda a evitar o uso excessivo do crédito e facilita o controle financeiro do cliente',
        },
        {
          question: 'Como aumentar meu limite de compra e saque?',
          answer:
            'Os limites disponibilizados, mensalmente, para Saque e Compra são baseados na Margem Consignável disponível informada pelo empregador. Desse modo, o limite será aumentado se a margem consignável disponível aumentar. A margem consignável é a parcela do seu salário ou benefício que pode ser comprometida com o Cartão Benefício.',
        },
      ],
    },
    {
      id: '3',
      text: 'Atendimento',
      icon: <MessageSquare />,
      faqs: [
        {
          question: 'Qual o horário de atendimento ?',
          answer: 'De segunda à quinta: 08:00 à 18:00 e sexta: 08:00 à 17:00',
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentCategory = categories.find((c) => c.id === selectedFaq);
  const items = currentCategory?.faqs ?? [];

  return (
    <section className=" bg-cardBlue p-4">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex flex-col items-center gap-4">
        <h2 className="bg-white py-2 px-4 rounded-lg w-fit uppercase ">Faq</h2>

        <p className="">Perguntas frequentes</p>

        <RadioGroup
          value={selectedFaq}
          onValueChange={(value) => {
            setSelectedFaq(value);
            setActiveIndex(null); // Reseta a pergunta aberta ao trocar categoria
          }}
          className="w-full grid grid-cols-1 sm:grid-cols-3"
        >
          {categories.map((option, index) => {
            return (
              <div key={index} className="bg-white">
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="peer hidden"
                />

                <Label
                  htmlFor={option.id}
                  className=" w-full flex flex-col gap-4 border rounded-lg p-4 shadow-sm cursor-pointer duration-300 hover:bg-projectBlue peer-data-[state=checked]:bg-projectBlue"
                >
                  {option.icon}

                  <p>{option.text}</p>
                </Label>
              </div>
            );
          })}
        </RadioGroup>

        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full p-4 rounded-lg ${activeIndex === index ? 'bg-white' : ''} duration-300 hover:bg-white `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="text-start w-full cursor-pointer flex gap-2"
            >
              <PlusCircle
                className={`transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              />

              <span className="font-medium">{item.question}</span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
