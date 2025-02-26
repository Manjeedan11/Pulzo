import { Marquee } from "../magicui/marquee";

const brands = [
  { img: import.meta.env.VITE_BRAND_APPLE },
  { img: import.meta.env.VITE_BRAND_BOSE },
  { img: import.meta.env.VITE_BRAND_META },
  { img: import.meta.env.VITE_BRAND_JBL },
  { img: import.meta.env.VITE_BRAND_MARSHAL },
  { img: import.meta.env.VITE_BRAND_SAMSUNG },
  { img: import.meta.env.VITE_BRAND_MI },
  { img: import.meta.env.VITE_BRAND_GOOGLE },
  { img: import.meta.env.VITE_BRAND_SONY },
];

const ImageCard = ({ img }) => {
  return <img className="w-32 h-32 mx-8" src={img} alt="Brand Logo" />;
};

function BrandMarquee() {
  return (
    <section className="py-20 px-4 xl:px-16 mt-10 text-center relative">
      <h1 className="text-4xl font-bold font-poppins mb-10">Our Brands</h1>

      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="relative flex w-full items-center justify-center">
          <Marquee pauseOnHover className="[--duration:10s] flex gap-16">
            {brands.map((brand, index) => (
              <ImageCard key={index} {...brand} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;
