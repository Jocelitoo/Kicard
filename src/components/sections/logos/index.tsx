import logo from '@/assets/images/logo2White.png';

export const Logos = () => {
  return (
    <section className="">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex justify-between ">
        <img src={logo} className="mx-auto min-[340px]:mx-0" />
        <img src={logo} className="hidden min-[340px]:block" />
        <img src={logo} className="hidden min-[480px]:block" />
        <img src={logo} className="hidden md:block" />
        <img src={logo} className="hidden lg:block" />
      </div>
    </section>
  );
};
