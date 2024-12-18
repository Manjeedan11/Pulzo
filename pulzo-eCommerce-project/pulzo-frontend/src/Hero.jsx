import { Button } from "@/components/ui/button";
import heroBanner from "./assets/hero/hero.png";

function Hero() {
  return (
    <section className="px-8 py-8">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        <div className="flex flex-col justify-center px-16 gap-4">
          <span className="inline-block rounded-full px-2 py-1 text-xs bg-[#febc26]">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-[3.75rem] font-semibold leading-none">
            Premium Product Online Shop
          </h1>
          <p>
            Your Future of Shopping. Explore, Compare, and Buy the Latest
            Electronics
          </p>
          <Button className="w-fit" asChild>
            <a
              href="/shop"
              className="px-4 py-2 text-white font-medium bg-black rounded-md"
            >
              Shop Now
            </a>
          </Button>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover"
            src={heroBanner}
            alt="Banner"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
//https://fee-storefront.vercel.app/assets/hero/hero.jpg
