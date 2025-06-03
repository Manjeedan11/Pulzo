import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { Badge } from "@/components/ui/badge";

function Collection() {
  const gamingPcSetup = import.meta.env.VITE_IMAGE_GAMING_PC_SETUP;
  const gamePack = import.meta.env.VITE_IMAGE_GAME_PACK;
  const gamingConsole = import.meta.env.VITE_IMAGE_GAMING_CONSOLE;
  const airpodCollection = import.meta.env.VITE_IMAGE_EARBUDS_COLLECTION;
  const appleVisionPro = import.meta.env.VITE_IMAGE_APPLE_VISION_PRO;
  const iphone15 = import.meta.env.VITE_IMAGE_IPHONE_15;

  return (
    <section className=" px-4 xl:px-16 mb-30 py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-3 font-poppins ">
          Popular Collections
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Check our best-selling electronics and gadgets available right now
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Gaming Accessories",
              images: [gamingPcSetup, gamePack, gamingConsole],
              badgeColor: "bg-orange-500 hover:bg-orange-600",
            },
            {
              title: "20% off Deals",
              images: [airpodCollection, appleVisionPro, iphone15],
              badgeColor: "bg-red-500 hover:bg-red-600",
            },
          ].map((collection, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-100 rounded-xl p-6 border">
                <div className="relative mb-4">
                  <div className="absolute bottom-4 left-4 z-10">
                    <Badge
                      className={`${collection.badgeColor} text-white text-lg py-2 px-4`}
                    >
                      {collection.title}
                    </Badge>
                  </div>
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={collection.images[0]}
                      alt={collection.title}
                      className="w-full h-64 object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {collection.images.slice(1).map((img, idx) => (
                    <CardItem key={idx} translateZ="60" className="w-full">
                      <img
                        src={img}
                        alt={collection.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </CardItem>
                  ))}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
