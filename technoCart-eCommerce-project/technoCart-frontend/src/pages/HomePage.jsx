import { useRef, useState } from "react";
import Hero from "@/components/standalone/Hero";
import Products from "@/components/standalone/Products";
import BrandMarquee from "@/components/standalone/BrandMarquee";
import CategoryShowCase from "@/components/standalone/CategoryShowCase";
import EnquiryForm from "@/components/standalone/EnquiryForm";
import FeaturedDeal from "@/components/standalone/FeaturedDeal";
import FooterCard from "@/components/standalone/FooterCard";
import Collection from "@/components/standalone/Collection";

function HomePage() {
  const productRef = useRef(null);

  return (
    <div className="pt-20">
      <Hero productRef={productRef} />
      <CategoryShowCase />
      <FeaturedDeal />
      <BrandMarquee />

      <section ref={productRef} className="container mx-auto py-24">
        <Products gridClassName="grid-cols-2 lg:grid-cols-3" limit={4} />
      </section>

      <Collection />
      <EnquiryForm />
      <FooterCard />
    </div>
  );
}

export default HomePage;
