import { CreditCard, Dot, Shield } from 'lucide-react';

const products = [
  {
    icon: <CreditCard />,
    title: 'Cartão consignado',
    text: 'Modalidade voltada para aposentados, pensionistas e servidores públicos. Ele oferece taxas de juros mais baixas, desconto automático na folha de pagamento e diversas vantagens exclusivas, tornando-se uma opção acessível e prática para quem busca crédito.',
    benefits: [
      'Taxas de Juros Menores',
      'Desconto Automático',
      'Facilidade de Aprovação',
      'Seguro de vida',
      'Cartão internacional',
    ],
  },
  {
    icon: <CreditCard />,
    title: 'Cartão Benefício',
    text: 'opção de cartão de crédito que se destaca pela praticidade e vantagens exclusivas. Ele opera de maneira similar a um cartão de crédito convencional, mas oferece benefícios adicionais, especialmente para quem busca facilitar o controle financeiro.',
    benefits: [
      'Taxas de Juros Menores',
      'Benefícios Adicionais',
      'Menor Risco de Inadimplência',
      'Uso Versátil',
      'Limite de Crédito Personalizad',
    ],
  },
  {
    icon: <Shield />,
    title: 'Empréstimo',
    text: 'Quantia em dinheiro concedida por uma instituição bancária ou financeira, com a grande vantagem de oferecer total liberdade de uso, ou seja, ao contrário dos financiamentos, você não precisa informar como pretende utilizar o dinheiro.',
    benefits: [
      'Facilidade de acesso',
      'Liberação rápida',
      'Não compromete outras linhas de crédito',
      'Sem necessidade de garantia',
      'Liberdade de uso',
    ],
  },
];

export const Products = () => {
  return (
    <section className="bg-cardBlue p-4">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex flex-col items-center gap-4 ">
        <p className="bg-white px-4 py-2 rounded-lg">Produtos</p>

        <div className="grid gap-4 lg:grid-cols-3">
          {products.map((product, index) => {
            return (
              <div key={index} className="bg-white p-4 rounded-lg space-y-4">
                <p>{product.icon}</p>

                <h3 className="text-xl">{product.title}</h3>

                <p className="text-[14px] text-gray-700">{product.text}</p>

                <div className="text-[14px] text-gray-700">
                  {product.benefits.map((benefit, index) => {
                    return (
                      <p key={index} className="flex ">
                        <Dot /> {benefit}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* <div className="bg-white p-4 rounded-lg space-y-4">
            <h3 className="text-xl">Cartão consignado</h3>

            <p className="text-[14px] text-gray-700">
              Modalidade voltada para aposentados, pensionistas e servidores
              públicos. Ele oferece taxas de juros mais baixas, desconto
              automático na folha de pagamento e diversas vantagens exclusivas,
              tornando-se uma opção acessível e prática para quem busca crédito.
            </p>

            <div className="text-[14px] text-gray-700">
              <p className="flex ">
                <Dot /> Taxas de Juros Menores
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
