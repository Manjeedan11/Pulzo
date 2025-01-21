import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import redBlink from "@/assets/featureDeal/red-blink.gif";

function FeaturedDeal() {
  return (
    <div className="grid grid-cols-2 rounded-md bg-[#f4f8f9] max-w-[80%] h-[450px] mx-auto">
      <div className="flex flex-col justify-center p-8 md:p-16 gap-y-4 h-[450px] ">
        <span className="flex items-center gap-2 px-2 py-1 text-1xl w-fit text-red-600 font-semibold">
          <img src={redBlink} className="w-4 h-4" />
          Don't Miss!!
        </span>

        <h1 className="text-[3rem] font-semibold leading-none">
          Enhance Your Music Experience
        </h1>
        <div className="flex justify-center items-center gap-8 pr-5 mt-5">
          {["Day", "Hrs", "Min", "Sec"].map((label, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-white"
            >
              <span className="text-3xl font-bold text-black">00</span>
              <span className="text-sm font-medium text-gray-500">{label}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-fit px-4 py-2 mt-5 text-white font-medium bg-blue-600 rounded-md"
          asChild
        >
          <p>Check it Out!</p>
        </Button>
      </div>
      <div className="relative">
        <img
          className="w-[150%] h-[150%] object-cover translate-y-[-250px]"
          src="/assets/products/airpods-max.png"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default FeaturedDeal;
