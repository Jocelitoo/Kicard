import logo from '../../assets/images/logo.png';
import wpp from '@/assets/svgs/wppWhite.svg';
import { Instagram, Mail } from 'lucide-react';
import { links } from '../header';
import { motion } from "motion/react";


export const Footer = () => {
  // Animação de scroll
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // suaviza o scroll
        block: "start",
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

            <div className="flex gap-2">
              <Mail />
              <p className="text-gray-200">kicard@outlook.com</p>
            </div>

            <div className="flex gap-2">
              <img src={wpp} alt="" />
              <p className="text-gray-200">(xx) 9xxxx-xxxx</p>
            </div>

            <div className="flex gap-2">
              <Instagram />
              <p className="text-gray-200">Kicard</p>
            </div>
          </div>
        </div>

        <nav className="text-white">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  {/* <a
                    href={link.url}
                    className=" hover:bg-projectBlue hover:text-black duration-300 px-4 py-2 rounded-lg text-gray-200"
                  >
                    {link.text}
                  </a> */}
                  <motion.button onClick={() => handleScroll(link.url)} className=" hover:bg-projectBlue hover:text-black duration-300 cursor-pointer px-4 py-2 rounded-lg">
                    {link.text}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <p className="text-gray-200">Kicard | CNPJ xx.xxx.xxx/xxxx-xx</p>
        </div>
      </div>
    </footer>
  );
};
