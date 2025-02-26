import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero/hero.png";
import Products from "./Products";
import { useRef } from "react";
import FeaturedDeal from "./FeaturedDeal";
import BrandMarquee from "./BrandMarquee";
import { BoxReveal } from "../magicui/box-reveal";
import EnquiryForm from "./EnquiryForm";
import { ShinyButton } from "../magicui/shiny-button";
import { Sparkles, BotMessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ChatBotSheet from "./ChatBotSheet";
import CategoryShowCase from "./CategoryShowCase";

function Hero({ productRef }) {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="py-8 px-4 xl:px-16 mt-5">
        <div className="grid grid-cols-2 rounded-lg min-h-[60vh] bg-[#f4f8f9]">
          <div className="flex flex-col justify-center items-center text-center p-8 md:p-16 gap-y-4">
            <BoxReveal boxColor={"#febc26"} duration={0.5}>
              <span className="inline-block rounded-full px-2 py-1 mr-10 text-xs w-fit bg-[#febc26] font-poppins">
                WEEKLY DISCOUNT
              </span>
            </BoxReveal>

            <BoxReveal boxColor={"#febc26"} duration={0.5}>
              <h1 className="text-[3.75rem] font-semibold leading-none font-poppins">
                Premium Product Online Shop
              </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#febc26"} duration={0.5}>
              <p>
                Your Future of Shopping. Explore, Compare, and Buy the Latest
                Electronics
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#febc26"} duration={0.5}>
              <div className="flex items-center gap-3">
                <Button
                  className="w-fit px-4 py-2 text-white font-medium bg-black rounded-md hover:bg-[#febc26] hover:text-black"
                  onClick={scrollToProduct}
                  asChild
                >
                  <p className="font-poppins">Shop now</p>
                </Button>

                <ShinyButton
                  className="p-3 rounded-lg border-black transition"
                  onClick={() => setIsChatBotOpen(true)}
                >
                  <BotMessageSquare className="w-5 h-5 " />
                </ShinyButton>
              </div>
            </BoxReveal>
          </div>

          <BoxReveal boxColor={"#febc26"} duration={0.5}>
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src={heroBanner}
                alt="Banner"
              />
            </div>
          </BoxReveal>
        </div>
      </section>

      <ChatBotSheet open={isChatBotOpen} onOpenChange={setIsChatBotOpen} />
    </>
  );
}

export default Hero;
