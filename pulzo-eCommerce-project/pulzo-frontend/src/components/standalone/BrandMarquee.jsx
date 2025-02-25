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
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s] flex gap-16">
        {brands.map((brand, index) => (
          <ImageCard key={index} {...brand} />
        ))}
      </Marquee>
    </div>
  );
}

export default BrandMarquee;
