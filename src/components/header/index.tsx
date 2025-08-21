import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const links = [
  { text: 'Home', url: '#' },
  { text: 'Sobre nós', url: '#sobre' },
  { text: 'Produtos', url: '#produtos' },
  { text: 'Vantagens', url: '#vantagens' },
  { text: 'FAQ', url: '#faq' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const menuRef = useRef<HTMLElement>(null);

  // Detectar cliques fora do menu para fecha-lo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !(target instanceof Element && target.closest('#menu-toggle-button'))
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky left-0 top-0 right-0 z-50 bg-projectGrey ">
      <div className="flex items-center justify-between max-w-7xl py-4 px-4 sm:px-8 lg:px-10 mx-auto">
        <a href="#">
          <img src={logo} width={150} height={100} />
        </a>

        <nav
          ref={menuRef}
          className={`absolute left-0 top-full w-full origin-top ${!isDesktop ? 'transition-all duration-300 ease-in-out' : 'transition-none'}
          ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} bg-projectGrey text-white lg:relative lg:scale-y-100 lg:opacity-100 lg:w-fit `}
        >
          <ul className="gap-4 items-center lg:flex lg:gap-4">
            {links.map((link, index) => {
              return (
                <li key={index} className="border-b border-black lg:border-0">
                  <a
                    href={link.url}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block text-center py-2 hover:bg-projectBlue hover:text-black duration-300 lg:px-4 lg:py-2 lg:rounded-lg"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          id="menu-toggle-button"
          size={'lg'}
          variant={'outline'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="cursor-pointer lg:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </header>

    // <header className="sticky left-0 top-0 right-0 flex items-center justify-between px-4 py-4 z-50 shadow-md backdrop-blur-3xl">
    //   <a href="#">
    //     <img src={logo} width={150} height={100} />
    //   </a>

    //   <nav
    //     ref={menuRef}
    //     className={`absolute left-0 top-full w-full origin-top ${!isDesktop ? 'transition-all duration-300 ease-in-out' : 'transition-none'}
    //     ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} lg:relative lg:scale-y-100 lg:opacity-100 lg:w-fit `}
    //   >
    //     <ul className="gap-4 items-center lg:flex lg:gap-4">
    //       {links.map((link, index) => {
    //         return (
    //           <li key={index} className="border-b border-black lg:border-0">
    //             <a
    //               href={link.url}
    //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //               className="block text-center py-2 hover:bg-yellow-300 duration-300 lg:px-4 lg:py-2 lg:rounded-lg"
    //             >
    //               {link.text}
    //             </a>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </nav>

    //   <Button
    //     id="menu-toggle-button"
    //     size={'lg'}
    //     variant={'outline'}
    //     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //     className="cursor-pointer lg:hidden"
    //   >
    //     {mobileMenuOpen ? <X /> : <Menu />}
    //   </Button>
    // </header>
  );
};
