import money from '@/assets/images/money.webp';
import phone from '@/assets/images/phone.webp';
import security from '@/assets/images/security.webp';

export const Educational = () => {
  return (
    <section
      id="educacional"
      className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex flex-col gap-4 items-center scroll-mt-24"
    >
      <h2 className="bg-cardBlue py-2 px-4 rounded-lg">Educacional</h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <a
          href="https://conceito.de/educacao-financeira"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg overflow-hidden relative group "
        >
          <img
            src={money}
            alt="Jarro caido com várias moedas dentro"
            loading="lazy"
            className="brightness-45  duration-300 group-hover:brightness-20"
          />

          <span className="absolute bottom-5 w-full text-white text-center text-xl">
            Educação financeira
          </span>
        </a>

        <a
          href="https://www.contabeis.com.br/noticias/65740/como-escapar-de-fraudes-e-golpes-bancarios"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg overflow-hidden relative group "
        >
          <img
            src={phone}
            alt="Mulher utilizando o celular"
            loading="lazy"
            className="brightness-45  duration-300 group-hover:brightness-20"
          />

          <span className="absolute bottom-5 w-full text-white text-center text-xl">
            Protega-se de golpes
          </span>
        </a>

        <a
          href="https://www.mpf.mp.br/servicos/lgpd/o-que-e-a-lgpd"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg overflow-hidden relative group "
        >
          <img
            src={security}
            alt="Celular virado na horizontal com o icone de um cadeado no centro"
            loading="lazy"
            className="brightness-45  duration-300 group-hover:brightness-20"
          />

          <span className="absolute bottom-5 w-full text-white text-center text-xl">
            O que é LGPD ?
          </span>
        </a>

        {/* <div className='relative group'>
                    <a href="https://conceito.de/educacao-financeira" target="_blank" rel="noopener noreferrer">
                        <img src={money} alt="Jarro caido com várias moedas dentro" className='rounded-lg brightness-45 transition-all duration-300 group-hover:brightness-20' />
                    </a>


                    <div className='absolute bottom-5 w-full'>
                        <p className=' text-white text-center text-xl'>Educação financeira</p>
                    </div>
                </div> */}

        {/* <div className='relative group'>
                    <a href="https://www.contabeis.com.br/noticias/65740/como-escapar-de-fraudes-e-golpes-bancarios" target="_blank" rel="noopener noreferrer">
                        <img src={phone} alt="Jarro caido com várias moedas dentro" className='rounded-lg brightness-45 transition-all duration-300 group-hover:brightness-20' />
                    </a>


                    <div className='absolute bottom-5 w-full'>
                        <p className=' text-white text-center text-xl'>Protega-se dos golpes</p>
                    </div>
                </div>

                <div className='relative group'>
                    <a href="https://www.mpf.mp.br/servicos/lgpd/o-que-e-a-lgpd" target="_blank" rel="noopener noreferrer">
                        <img src={security} alt="Jarro caido com várias moedas dentro" className='rounded-lg brightness-45 transition-all duration-300 group-hover:brightness-20' />
                    </a>


                    <div className='absolute bottom-5 w-full'>
                        <p className=' text-white text-center text-xl'>O que é LGPD ?</p>
                    </div>
                </div> */}
      </div>
    </section>
  );
};
