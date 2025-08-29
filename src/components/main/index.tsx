import { Achievements } from '../sections/home/achievements';
import { Advantages } from '../sections/home/advantages';
import { FAQ } from '../sections/home/faq';
import { Hero } from '../sections/home/hero';
import { Educational } from '../sections/home/educational';
import { Logos } from '../sections/home/logos';
import { Map } from '../sections/home/map';
import { Products } from '../sections/home/products';
import wpp from '@/assets/svgs/wpp.svg'

export const Main = () => {
  return (
    <main>
      <div className="space-y-8 lg:space-y-16">
        <Hero />
        <Logos />
        <Achievements />
        <Products />
        <Advantages />
        <Map />
        <Educational />
        <FAQ />
      </div>

      <a href="#" className='fixed right-5 bottom-5 z-50 size-12 lg:size-14 bg-black rounded-full flex items-center justify-center p-2 '>
        <img src={wpp} alt="Icone do Whatsapp" />
      </a>
    </main>
  );
};
