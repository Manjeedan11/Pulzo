import { useDispatch, useSelector } from "react-redux";
import { Star, ShoppingCart, Heart, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/features/cartSlice";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

function ProductPreviewPage() {
  const product = useSelector((state) => state.preview.value);
  console.log(product);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  if (!product) {
    return <p className="font-poppins">No products available for preview</p>;
  }

  const handleAddToCart = () => {
    if (!isSignedIn) {
      return navigate("/sign-in");
    }

    dispatch(addToCart(product));

    toast({
      description: (
        <div className="flex items-center space-x-2">
          <CircleCheck className="w-5 h-5 text-green-800" />
          <span className="font-medium text-sm font-poppins">
            Item added to cart
          </span>
        </div>
      ),
      duration: 2000,
      className:
        "bg-green-100 text-green-800 rounded-lg p-4 shadow-md transition-opacity opacity- duration-500 ease-in-out transform",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md font-poppins"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 font-poppins ${
                    i < Math.floor(product.ratings)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 font-poppins">
              ({product.ratings})
            </span>
          </div>
          <p className="text-2xl font-semibold font-poppins">
            ${product.price}
          </p>
          <div className="flex items-center space-x-4 text-gray-600 font-poppins">
            <span className="text-sm">{product.sold ?? 0} sold</span>
            <span className="text-sm">{product.stock ?? 0} in stock</span>
          </div>

          <p className="text-gray-600 font-poppins">{product.description}</p>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">
              Key Features:
            </h3>
            <ul className="list-disc list-inside space-y-2 font-poppins">
              {product.keyFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            <Button className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreviewPage;
