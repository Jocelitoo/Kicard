import logo from '@/assets/images/logo2White.png';

export const Logos = () => {
  return (
    <section className="">
      <div className="max-w-7xl px-4 sm:px-8 lg:px-10 mx-auto flex justify-between ">
        <img src={logo} className="mx-auto min-[340px]:mx-0 size-24" />
        <img src={logo} className="hidden min-[340px]:block size-24" />
        <img src={logo} className="hidden min-[480px]:block size-24" />
        <img src={logo} className="hidden md:block size-24" />
        <img src={logo} className="hidden lg:block size-24" />
      </div>
    </section>
  );
};
