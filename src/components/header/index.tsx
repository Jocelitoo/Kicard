import logo from '../../assets/images/logo.webp';
import logo2 from '@/assets/images/logo2White.webp';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { phone } from '@/utils/phone';

export const links = [
  { text: 'Home', url: '#hero' },
  { text: 'Sobre nós', url: '#sobre' },
  { text: 'Produtos', url: '#produtos' },
  { text: 'Vantagens', url: '#vantagens' },
  { text: 'Educacional', url: '#educacional' },
  { text: 'FAQ', url: '#faq' },
];

export const Header = () => {
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
    } else {
      window.location.href = '/'; // Redirecionar para a home em caso de estar em outra página
    }
  };

  return (
    <header className="sticky left-0 top-0 right-0 z-50 bg-projectGrey ">
      <div className="flex items-center justify-between max-w-7xl py-4 px-4 sm:px-8 lg:px-10 mx-auto">
        <a href="/">
          <img src={logo} alt="logo da empresa" width={150} height={100} />
        </a>

        {/* Nav desktop */}
        <nav className="text-white hidden lg:block">
          <ul className="flex gap-4">
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

        <Button
          size={'lg'}
          asChild
          className="hidden lg:flex bg-projectBlue text-black duration-300  hover:bg-projectBlueHover"
        >
          <a
            href={`https://${
              isMobile ? 'api' : 'web'
            }.whatsapp.com/send?phone=${phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>
        </Button>

        {/* Nav mobile */}
        <Sheet>
          <SheetTrigger
            aria-label="Abrir menu"
            className="bg-projectGreen p-1 rounded-md lg:hidden"
          >
            <Menu />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img src={logo2} alt="Logo da empresa" className="size-8" />
              </SheetTitle>
            </SheetHeader>

            <nav>
              <ul className="space-y-4 px-2">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <SheetClose asChild>
                        <a
                          href={link.url}
                          className="block p-2 rounded-lg bg-cardBlue duration-300 hover:bg-projectBlue"
                        >
                          {link.text}
                        </a>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <SheetFooter>
              <SheetClose>
                <Button
                  size={'lg'}
                  asChild
                  className="bg-projectBlue text-black w-full duration-300 hover:bg-projectBlueHover"
                >
                  <a
                    href={`https://${
                      isMobile ? 'api' : 'web'
                    }.whatsapp.com/send?phone=${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale conosco
                  </a>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
