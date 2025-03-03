import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Collection() {
  return (
    <section className="py-20 px-4 xl:px-16 mb-30 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 font-['Poppins']">
          Popular Collections
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Check our best-selling electronics and gadgets available right now
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gaming Collection */}
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 gap-1">
                <div className="col-span-2 relative">
                  <div className="absolute bottom-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-2 px-4">
                      Gaming Accessories
                    </Badge>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Gaming Headset"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Gaming Keyboard and Mouse"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Gaming PC"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deals Collection */}
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 gap-1">
                <div className="col-span-2 relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white text-lg py-2 px-4">
                      30% off Deals
                    </Badge>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
                    alt="Audio Equipment"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wireless Earbuds"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1544866092-1677b00c047f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Power Bank"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Collection;
