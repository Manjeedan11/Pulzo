import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useNavigate } from "react-router";
import { useCreateOrderMutation } from "@/lib/api";
import { updatePreviewProduct } from "@/lib/features/previewSlice";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { CircleX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function ShippingForm({ cart }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const shippingSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    addressLine2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip Code is required"),
    phoneNumber: z
      .string()
      .refine((value) => /^\+?[1-9]\d{1,14}$/.test(value), {
        message: "Invalid phone number format",
      }),
  });

  const validateFormData = (formData) => {
    const result = shippingSchema.safeParse(formData);
    return result;
  };

  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validateFormData(formData);

    if (!validationResult.success) {
      console.error("Validation errors:", validationResult.error.format());
      toast({
        description: (
          <div className="flex items-center space-x-2">
            <CircleX className="w-5 h-5 text-red-800" />
            <span className="font-medium text-sm">
              Invalid form data. Please check your inputs.
            </span>
          </div>
        ),
        duration: 2000,
        className:
          "bg-red-100 text-red-800 rounded-lg p-4 shadow-md transition-opacity duration-500 ease-in-out transform",
      });
      return;
    }

    const orderData = {
      items: cart.map((item) => ({
        product: {
          _id: item.product._id,
          name: item.product.name,
          price: item.product.price.toString(),
          image: item.product.image,
          description: item.product.description || "",
        },
        quantity: item.quantity.toString(),
      })),
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2 || "",
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        phoneNumber: formData.phoneNumber,
      },
    };

    createOrder(orderData)
      .unwrap()
      .then(() => {
        cart.forEach((item) => {
          dispatch(
            updatePreviewProduct({
              productId: item.product._id,
              quantity: item.quantity,
            })
          );
        });
        navigate("/shop/cart/checkout/paymentPortal");
      })
      .catch((err) => {
        console.error("Order submission error:", err);
        toast({
          description: (
            <div className="flex items-center space-x-2">
              <CircleX className="w-5 h-5 text-red-800" />
              <span className="font-medium text-sm">
                Failed to place order. Please try again.
              </span>
            </div>
          ),
          duration: 2000,
          className:
            "bg-red-100 text-red-800 rounded-lg p-4 shadow-md transition-opacity duration-500 ease-in-out transform",
        });
      });
  };

  return (
    <Card className="rounded-lg mr-11">
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="addressLine1">Address Line 1</Label>
            <Input
              id="addressLine1"
              name="addressLine1"
              placeholder="123 Main St"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input
              id="addressLine2"
              name="addressLine2"
              placeholder="Apt 48"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="Colombo"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                placeholder="Western Province"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="11850"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: String(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+94702700100"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <Button type="submit">Proceed to Payment</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ShippingForm;
