const GalleryComponent = () => {
  return (
    <div className="px-4 h-full lg:h-screen py-2">
      <div>
        <div className="grid gap-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px]">
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/e7/a2/42/e7a24285c744661f32f96746a2a4dadb.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm ">
                {"["} 01 {"]"}
              </h1>
            </div>
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/aa/47/8d/aa478d675ac3a1e46509eeb7556c7b2d.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm">
                {"["} 02 {"]"}
              </h1>
            </div>
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/b8/bb/13/b8bb13bc902b62039e402dd860c7d849.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm">
                {"["} 03 {"]"}
              </h1>
            </div>
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/99/aa/72/99aa72d7ee613642e0123e2719dadb7d.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm">
                {"["} 04 {"]"}
              </h1>
            </div>
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/bc/5b/3d/bc5b3d8e2e634aadded8a7e08a172ce2.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm">
                {"["} 05 {"]"}
              </h1>
            </div>
            <div>
              <img
                className="h-auto max-w-full aspect-square"
                src="https://i.pinimg.com/236x/4c/42/24/4c42245fd0b0548bc6c3899906694c91.jpg"
                alt=""
              />
              <h1 className="font-semibold text-sm">
                {"["} 06 {"]"}
              </h1>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center my-4">
              <div>
                <h1 className="font-semibold text-xl">Artist</h1>
                <h1 className="font-semibold text-xl italic pl-8">Artworks</h1>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-end">Gallery</h1>
                <h1 className="font-semibold text-xl italic pr-8">Editorial</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <a href="/gallery">
                <h1 className="font-extrabold text-7xl md:text-[152px] lg:text-[256px] uppercase">
                gal
                </h1>
              </a>
              <a href="/gallery">
                <h1 className="font-extrabold text-7xl md:text-[152px] lg:text-[256px] uppercase">
                lery
              </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
