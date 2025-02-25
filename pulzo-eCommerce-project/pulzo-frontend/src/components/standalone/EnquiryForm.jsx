import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CircleCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialContactState = {
  name: "",
  email: "",
  phoneNumber: "",
  description: "",
};

function EnquiryForm() {
  const [contactData, setContactData] = useState(initialContactState);
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phoneNumber) return;

    try {
      setContactData(initialContactState);
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
    <section className="flex flex-col items-center justify-center min-h-screen py-8 mt-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          Got Questions ? Let’s Talk Tech !
        </h1>
        <p className="text-gray-600 font-poppins">
          Looking for the latest gadgets or need expert advice ? Drop your
          details, and we’ll connect with you ASAP !
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-poppins">
            Quick Gadget Enquiry
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
                value={contactData.name}
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-poppins">
                Email
              </Label>
              <Input
                id="email"
                className="font-poppins"
                type="email"
                value={contactData.email}
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, email: e.target.value }))
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
                value={contactData.phoneNumber}
                onChange={(e) =>
                  setContactData((prev) => ({
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
                Description
              </Label>
              <Textarea
                id="description"
                value={contactData.description}
                onChange={(e) =>
                  setContactData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Tell us what you're looking for !"
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
