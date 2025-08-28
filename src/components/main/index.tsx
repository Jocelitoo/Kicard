import { Achievements } from '../sections/achievements';
import { Advantages } from '../sections/advantages';
import { FAQ } from '../sections/faq';
import { Hero } from '../sections/hero';
import { Educational } from '../sections/educational';
import { Logos } from '../sections/logos';
import { Map } from '../sections/map';
import { Products } from '../sections/products';
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
