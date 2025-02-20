import { Marquee } from "../magicui/marquee";

const brands = [
  { img: "https://avatar.vercel.sh/jack" },
  { img: "https://avatar.vercel.sh/jill" },
  { img: "https://avatar.vercel.sh/john" },
  { img: "https://avatar.vercel.sh/jane" },
  { img: "https://avatar.vercel.sh/jenny" },
  { img: "https://avatar.vercel.sh/james" },
];

const ImageCard = ({ img }) => {
  return <img className="rounded-full w-16 h-16 mx-8" src={img} alt="Avatar" />;
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
