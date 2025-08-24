import { Banner } from '../banner';
import { Achievements } from '../sections/achievements';
import { Advantages } from '../sections/advantages';
import { FAQ } from '../sections/faq';
import { Hero } from '../sections/hero';
import { Logos } from '../sections/logos';
import { Map } from '../sections/map';
import { Products } from '../sections/products';

export const Main = () => {
  return (
    <main className="space-y-8 lg:space-y-16">
      <Hero />
      <Logos />
      <Achievements />
      <Products />
      <Advantages />
      <Map />
      <FAQ />
    </main>
  );
};
