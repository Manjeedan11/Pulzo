import { Button } from "@/components/ui/button";

function FeaturedDeal() {
  return (
    <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9] max-w-[80%] mx-auto">
      <div className="flex flex-col justify-center p-8 md:p-16 gap-y-4">
        <span className="inline-block rounded-full px-2 py-1 text-xs w-fit bg-[#febc26]">
          WEEKLY DISCOUNT
        </span>
        <h1 className="text-[3rem] font-semibold leading-none">
          Enhance Your Music Experience
        </h1>
        <p>
          Your Future of Shopping. Explore, Compare, and Buy the Latest
          Electronics
        </p>
        <Button
          className="w-fit px-4 py-2 text-white font-medium bg-black rounded-md"
          asChild
        >
          <p>Shop now</p>
        </Button>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" alt="Banner" />
      </div>
    </div>
  );
}

export default FeaturedDeal;
