import { galleryData } from "../../constants";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const data = galleryData;

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="font-extrabold text-7xl md:text-[152px] lg:text-[256px] uppercase">
            gal
          </h1>
          <h1 className="font-extrabold text-7xl md:text-[152px] lg:text-[256px] uppercase">
            lery
          </h1>
        </div>
        <div className="grid gap-4 max-w-screen-lg mx-auto mb-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-4 lg:px-0">
            {data.map((item, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full aspect-square"
                  src={item.img}
                  alt=""
                />
                <h1 className="font-semibold text-sm ">
                  {"["} {`${index > 10 && index === 10 ? index : index + 1}`}{" "}
                  {"]"}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
