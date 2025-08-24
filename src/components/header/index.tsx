import logo from '../../assets/images/logo.png';
import logo2 from '@/assets/images/logo2White.png';
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

export const links = [
  { text: 'Home', url: '#' },
  { text: 'Sobre nós', url: '#sobre' },
  { text: 'Produtos', url: '#produtos' },
  { text: 'Vantagens', url: '#vantagens' },
  { text: 'FAQ', url: '#faq' },
];

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 right-0 z-50 bg-projectGrey ">
      <div className="flex items-center justify-between max-w-7xl py-4 px-4 sm:px-8 lg:px-10 mx-auto">
        <a href="#">
          <img src={logo} alt="logo da empresa" width={150} height={100} />
        </a>

        {/* Nav desktop */}
        <nav className="text-white hidden lg:block">
          <ul className="flex gap-4">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.url}
                    className=" hover:bg-projectBlue hover:text-black duration-300 px-4 py-2 rounded-lg"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Nav mobile */}
        <Sheet>
          <SheetTrigger className="bg-projectGreen p-1 rounded-md  lg:hidden">
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
                  <a href="#">Fale conosco</a>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
