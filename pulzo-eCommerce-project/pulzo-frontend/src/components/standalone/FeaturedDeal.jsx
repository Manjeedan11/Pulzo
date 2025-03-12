import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import redBlink from "@/assets/featureDeal/red-blink.gif";
import { ShimmerButton } from "../magicui/shimmer-button";
import { Link } from "react-router";
import { ShineBorder } from "../magicui/shine-border";

function FeaturedDeal() {
  const featureVR = import.meta.env.VITE_FEATURE_VR;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +deadline - +now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto py-20 px-4 xl:px-16 mt-10">
      <ShineBorder className="grid grid-cols-2 bg-[#f4f8f9] max-w-[80%] h-[450px] mx-auto">
        <div className="flex flex-col justify-center p-8 md:p-16 gap-y-4 h-[450px]">
          <span className="flex items-center gap-2 px-2 py-1 text-1xl w-fit text-red-600 font-semibold">
            <img src={redBlink} className="w-4 h-4 font-poppins" />
            Don't Miss!!
          </span>

          <h1 className="text-[3rem] font-semibold leading-none font-poppins">
            Enhance Your VR Experience
          </h1>

          <div className="flex justify-center items-center gap-8 pr-5 mt-5">
            {Object.entries(timeLeft).map(([label, value], index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-white"
              >
                <span className="text-3xl font-bold text-black">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 w-full ">
            <Link to="/shop">
              <ShimmerButton className="w-30 h-10 px-4 py-2 text-white font-poppins flex justify-center items-center">
                Check it Out !
              </ShimmerButton>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-[100%] h-[100%] object-cover translate-y-[-780px]"
            src={featureVR}
            alt="Banner"
          />
        </div>
      </ShineBorder>
    </section>
  );
}

export default FeaturedDeal;
