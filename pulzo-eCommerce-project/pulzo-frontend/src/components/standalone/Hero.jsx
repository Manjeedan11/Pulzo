import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero/hero.png";
import Products from "./Products";
import { useRef } from "react";
import FeaturedDeal from "./FeaturedDeal";

function Hero() {
  const productRef = useRef(null);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="py-8 px-4 xl:px-16">
        <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
          <div className="flex flex-col justify-center p-8 md:p-16 gap-y-4">
            <span className="inline-block rounded-full px-2 py-1 text-xs w-fit bg-[#febc26]">
              WEEKLY DISCOUNT
            </span>
            <h1 className="text-[3.75rem] font-semibold leading-none">
              Premium Product Online Shop
            </h1>
            <p>
              Your Future of Shopping. Explore, Compare, and Buy the Latest
              Electronics
            </p>
            <Button
              className="w-fit px-4 py-2 text-white font-medium bg-black rounded-md"
              onClick={scrollToProduct}
              asChild
            >
              <p>Shop now</p>
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

      <section className="py-20 px-4 xl:px-16">
        <FeaturedDeal />
      </section>

      <section className="py-15">
        <div ref={productRef} className="container mx-auto">
          <Products />
        </div>
      </section>
    </>
  );
}

export default Hero;
//https://fee-storefront.vercel.app/assets/hero/hero.jpg
