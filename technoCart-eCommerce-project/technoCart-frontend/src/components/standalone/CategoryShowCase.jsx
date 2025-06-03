import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "True Wireless Earbuds",
    items: "1.6K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_EARBUDS,
  },
  {
    title: "Smart Watches",
    items: "2.7K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_SMARTWATCHES,
  },
  {
    title: "Wireless Speakers",
    items: "2.7K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_SPEAKERS,
  },
  {
    title: "Smartphones",
    items: "1.7K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_SMARTPHONES,
  },
  {
    title: "Virtual Reality Gear",
    items: "2.7K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_VR,
  },
  {
    title: "Gaming Accessories",
    items: "0.7K+ Items",
    imgSrc: import.meta.env.VITE_CATEGORY_GAMING,
  },
];

function CategoryShowCase() {
  return (
    <section className="py-20 px-4 xl:px-16 mb-30 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-center font-poppins mb-16 text-4xl md:text-5xl font-semibold text-gray-800">
            Shop Our Curated Categories
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="bg-gray-100 p-6 rounded-full hover:bg-orange-50 transition-colors duration-300">
                <img
                  src={category.imgSrc}
                  alt={category.title}
                  className="h-24 w-24 object-cover rounded-full font-poppins"
                />
              </div>
              <h3 className="font-semibold text-lg font-poppins text-gray-800">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowCase;
