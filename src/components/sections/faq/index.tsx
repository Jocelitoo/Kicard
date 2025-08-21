import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { File, MessageSquare, PlusCircle, User2 } from 'lucide-react';
import { useState } from 'react';

const publicFAQ = [
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
];

const advantageFAQ = [
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
];

const serviceFAQ = [
  {
    question: 'Qual o horário de atendimento ?',
    answer: 'De segunda à quinta: 08:00 à 18:00 e sexta: 08:00 à 17:00',
  },
];

const optionsFAQ = [
  {
    icon: <User2 />,
    text: 'Público',
    value: '1',
  },
  {
    icon: <File />,
    text: 'Benefícios',
    value: '2',
  },
  {
    icon: <MessageSquare />,
    text: 'Atendimento',
    value: '3',
  },
];

export const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState('1');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" bg-cardBlue p-4">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex flex-col items-center gap-4">
        <p className="bg-white py-2 px-4 rounded-lg w-fit uppercase ">Faq</p>

        <h2 className="">Perguntas frequentes</h2>

        <RadioGroup
          defaultValue="1"
          onValueChange={(event) => setSelectedFaq(event)}
          className="w-full grid grid-cols-1 sm:grid-cols-3"
        >
          {optionsFAQ.map((option, index) => {
            return (
              <div key={index} className="bg-white">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="peer hidden"
                />

                <Label
                  htmlFor={option.value}
                  className=" w-full flex flex-col gap-4 border rounded-lg p-4 shadow-sm cursor-pointer duration-300 hover:bg-projectBlue peer-data-[state=checked]:bg-projectBlue"
                >
                  {option.icon}

                  <p>{option.text}</p>
                </Label>
              </div>
            );
          })}
        </RadioGroup>

        {selectedFaq === '1' &&
          publicFAQ.map((item, index) => (
            <div
              key={index}
              className={`w-full p-4 rounded-lg ${activeIndex === index ? 'bg-white' : ''} `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-start w-full cursor-pointer flex gap-2"
              >
                <PlusCircle
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}
                />

                <span className="font-medium">{item.question}</span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}

        {selectedFaq === '2' &&
          advantageFAQ.map((item, index) => (
            <div
              key={index}
              className={`w-full p-4 rounded-lg ${activeIndex === index ? 'bg-white' : ''} `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-start w-full cursor-pointer flex gap-2"
              >
                <PlusCircle
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}
                />

                <span className="font-medium">{item.question}</span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}

        {selectedFaq === '3' &&
          serviceFAQ.map((item, index) => (
            <div
              key={index}
              className={`w-full p-4 rounded-lg ${activeIndex === index ? 'bg-white' : ''} `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-start w-full cursor-pointer flex gap-2"
              >
                <PlusCircle
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}
                />

                <span className="font-medium">{item.question}</span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};
