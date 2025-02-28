import { useRef, useState } from "react";
import Hero from "@/components/standalone/Hero";
import Products from "@/components/standalone/Products";
import BrandMarquee from "@/components/standalone/BrandMarquee";
import CategoryShowCase from "@/components/standalone/CategoryShowCase";
import EnquiryForm from "@/components/standalone/EnquiryForm";
import FeaturedDeal from "@/components/standalone/FeaturedDeal";
import FooterCard from "@/components/standalone/FooterCard";

function HomePage() {
  const productRef = useRef(null);

  return (
    <div className="pt-20">
      <Hero productRef={productRef} />
      <BrandMarquee />
      <FeaturedDeal />

      <section ref={productRef} className="container mx-auto pt-20">
        <Products gridClassName="grid-cols-3" limit={4} />
      </section>

      <CategoryShowCase />
      <EnquiryForm />
      <FooterCard />
    </div>
  );
}

export default HomePage;
