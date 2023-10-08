const HeroSection = () => {
  return (
    <div className="h-full lg:h-screen bg-[] w-full">
      {/* navbar */}
      <div className="py-2 px-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <pre className="hover:underline cursor-pointer uppercase text-xs font-semibold">
            {"["} .Home {"]"}
            </pre>
          </a>
          <a href="/gallery">
          <pre className="hover:underline cursor-pointer uppercase text-xs font-semibold">
            {"["} .gallery {"]"}
          </pre>
          </a>
          <a href="/contact">
          <pre className="hover:underline cursor-pointer uppercase text-xs font-semibold">
            {"["} .Contact {"]"}
          </pre>
          </a>
          <a href="https://github.com/fvdime/zweimal">
          <pre className="hover:underline cursor-pointer uppercase text-xs font-semibold">
            {"["} .Source {"]"}
          </pre>
          </a>
        </div>
      </div>
      {/* content */}
      <div>
      <div className="uppercase px-4 py-8">
          <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl">
          ✧ a creative tattoo artist <span className='font-light'>/</span> <br /> photographer<br /> based on Hamburg ✧
          </h1>
          <pre className="text-xs font-semibold text-end pt-2 md:pt-0">{'['}  Art,   Tattoo,  Photograph  {']'}</pre>
        </div>
        <div className="flex flex-row items-end justify-between px-8 py-2">
          <div className="w-48 h-48 overflow-hidden tracking-tight">
            <span className="text-xs font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              nam ea vel officiis accusamus iusto ab recusandae perspiciatis
              sequi. Amet voluptates a perspiciatis sequi expedita voluptatum
            </span>
          </div>
          <div className="w-72">
            <img src="/tat.jpg" alt="" className="object-cover" />
          </div>
          <pre className="text-xs font-semibold">{'['}  Hamburg, DE {']'}</pre>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
