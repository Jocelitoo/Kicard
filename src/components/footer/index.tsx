import logo from '../../assets/images/logo.webp';
import wpp from '@/assets/svgs/wppWhite.svg';
import { Instagram, Mail, Phone } from 'lucide-react';
import { links } from '../header';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { phone } from '@/utils/phone';

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verificar se o usuário está acessando no desktop ou celular
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  // Animação de scroll
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // suaviza o scroll
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-projectGrey text-white mt-8 lg:mt-16">
      <div className="max-w-7xl py-8 lg:py-8 px-4 sm:px-8 lg:px-10 mx-auto flex flex-col items-center gap-8 ">
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:justify-between ">
          <div>
            <img src={logo} alt="Logo da empresa" className="w-40" />
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Horário de atendimento</h3>

            <p className="text-gray-200">Segunda à quinta: 8h às 18h</p>
            <p className="text-gray-200">Sexta: 8h às 17h</p>
          </div>

          <div>
            <h3 className="text-2xl mb-2 font-bold">Termos</h3>

            <a
              href="/politica-de-privacidade"
              className="text-gray-200 underline"
            >
              Política de privacidade
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl mb-2 font-bold">Contato</h3>

            <a
              href={`https://${isMobile ? 'api' : 'web'
                }.whatsapp.com/send?phone=${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 group"
            >
              <img src={wpp} alt="Icone do Whatsapp" />

              <span className="duration-300 group-hover:text-projectBlue">
                {phone}
              </span>
            </a>

            <p className="flex gap-2 group">
              <Phone />
              <span className="duration-300 group-hover:text-projectBlue">
                08008780126
              </span>
            </p>

            <a href="mailto:sac@kicard.com.br" className="flex gap-2 group">
              <Mail />
              <span className="duration-300 group-hover:text-projectBlue">
                sac@kicard.com.br
              </span>
            </a>

            <a
              href="https://www.instagram.com/kicardbr?igsh=MTdjYmpvM3dlODJ0cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 group"
            >
              <Instagram />
              <span className="duration-300 group-hover:text-projectBlue">
                Kicard
              </span>
            </a>
          </div>
        </div>

        <nav className="text-white">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between gap-4 text-center">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <motion.button
                    onClick={() => handleScroll(link.url)}
                    className=" hover:bg-projectBlue hover:text-black duration-300 cursor-pointer px-4 py-2 rounded-lg"
                  >
                    {link.text}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <p className="text-gray-200">Kicard | CNPJ 51.429.903/0001-23</p>
        </div>
      </div>
    </footer>
  );
};
