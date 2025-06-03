import { Button } from "@/components/ui/button";
import Products from "./Products";
import { useRef } from "react";
import FeaturedDeal from "./FeaturedDeal";
import BrandMarquee from "./BrandMarquee";
import EnquiryForm from "./EnquiryForm";
import { ShinyButton } from "../magicui/shiny-button";
import { Sparkles, BotMessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ChatBotSheet from "./ChatBotSheet";
import CategoryShowCase from "./CategoryShowCase";
import { RainbowButton } from "../magicui/rainbow-button";
import { PulsatingButton } from "../magicui/pulsating-button";

function Hero({ productRef }) {
  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const heroBanner = import.meta.env.VITE_HERO_BANNER;

  return (
    <>
      <section className="py-12 md:py-24 px-4 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[30px] min-h-[65vh] bg-[#f4f8f9] mb-50">
          <div className="flex flex-col mt-8 justify-center items-center text-center p-8 md:p-16 gap-y-6">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full px-4 py-2 text-xs font-semibold text-black bg-[#febc26] mb-4">
                WEEKLY DISCOUNT
              </span>

              <h1 className="text-[3.75rem] font-semibold leading-none font-poppins mb-4">
                Premium Product Online Shop
              </h1>

              <p className="text-lg font-medium text-gray-700 mb-6">
                Your Future of Shopping. Explore, Compare, and Buy the Latest
                Electronics
              </p>

              <PulsatingButton
                className="flex items-center justify-center mb-6 w-fit px-6 py-3 text-white font-medium rounded-md bg-black hover:bg-[#febc26] hover:text-black"
                onClick={scrollToProduct}
              >
                Shop now
              </PulsatingButton>
            </div>
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

      <ChatBotSheet />
    </>
  );
}

export default Hero;
