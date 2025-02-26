import { useRef, useState } from "react";
import Hero from "@/components/standalone/Hero";
import Products from "@/components/standalone/Products";
import BrandMarquee from "@/components/standalone/BrandMarquee";
import CategoryShowCase from "@/components/standalone/CategoryShowCase";
import EnquiryForm from "@/components/standalone/EnquiryForm";
import FeaturedDeal from "@/components/standalone/FeaturedDeal";

function HomePage() {
  const productRef = useRef(null);

  return (
    <div>
      <Hero productRef={productRef} />
      <BrandMarquee />
      <FeaturedDeal />

      <section ref={productRef} className="container mx-auto">
        <Products gridClassName="grid-cols-3" limit={4} />
      </section>

      <CategoryShowCase />
      <EnquiryForm />
    </div>
  );
}

export default HomePage;
