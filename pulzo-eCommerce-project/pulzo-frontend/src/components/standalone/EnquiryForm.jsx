import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CircleCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateEnquiryMutation, useGetProductsQuery } from "@/lib/api";

const initialEnquiryState = {
  name: "",
  productName: "",
  email: "",
  phoneNumber: "",
  issueDetails: "",
};

function EnquiryForm() {
  const [enquiryData, setEnquiryData] = useState(initialEnquiryState);
  const [errorMessage, setErrorMessage] = useState("");
  const [createEnquiry] = useCreateEnquiryMutation();
  const { toast } = useToast();
  const { data: products = [] } = useGetProductsQuery();

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!enquiryData.name || !enquiryData.phoneNumber) return;

    try {
      const response = await createEnquiry(enquiryData).unwrap();
      setEnquiryData(initialEnquiryState);
      setErrorMessage("");

      toast({
        description: (
          <div className="flex items-center space-x-2">
            <CircleCheck className="w-5 h-5 text-green-800" />
            <span className="font-medium text-sm">
              Your message has been successfully sent. We’ll get back to you
              soon !
            </span>
          </div>
        ),
        duration: 2000,
        className:
          "bg-green-100 text-green-800 rounded-lg p-4 shadow-md transition-opacity duration-500 ease-in-out transform",
      });
    } catch (error) {
      setErrorMessage("Error submitting contact. Please try again.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen mt-10 py-10 px-4 xl:px-16 mb-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          Have a Question ? We're Here to Help !
        </h1>
        <p className="text-gray-600 font-poppins">
          Need details on a gadget or expert advice ? Share your inquiry, and
          our team will get back to you ASAP !
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-poppins">
            Get Expert Assistance
          </CardTitle>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
          )}
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-poppins">
                Name
              </Label>
              <Input
                id="name"
                className="font-poppins"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productName">Product Name</Label>
              <Select
                onValueChange={(value) =>
                  setEnquiryData((prev) => ({ ...prev, productName: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder="Select Product"
                    value={enquiryData.productName}
                  />
                </SelectTrigger>
                <SelectContent>
                  {products.length > 0 ? (
                    products.map((product) => (
                      <SelectItem key={product._id} value={product.name}>
                        {product.name}
                      </SelectItem>
                    ))
                  ) : (
                    <p className="px-2 py-1 text-gray-500">
                      No products available
                    </p>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-poppins">
                Email
              </Label>
              <Input
                id="email"
                className="font-poppins"
                type="email"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="font-poppins">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                className="font-poppins"
                type="tel"
                value={enquiryData.phoneNumber}
                onChange={(e) =>
                  setEnquiryData((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="font-poppins">
                Issue Details
              </Label>
              <Textarea
                id="description"
                value={enquiryData.issueDetails}
                onChange={(e) =>
                  setEnquiryData((prev) => ({
                    ...prev,
                    issueDetails: e.target.value,
                  }))
                }
                placeholder="Describe the issue or concern briefly"
                className="min-h-[100px] font-poppins"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full font-poppins rounded-[30px] hover:bg-[#febc26] hover:text-black"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default EnquiryForm;
