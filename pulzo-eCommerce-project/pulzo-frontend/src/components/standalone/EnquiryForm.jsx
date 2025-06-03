import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRightIcon, ArrowLeftIcon, Sparkles, Headset } from "lucide-react";
import { useCreateEnquiryMutation, useGetProductsQuery } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Lottie from "lottie-react";
import customerCareAnimation from "@/assets/customerCare/customerCare.json";
import Vapi from "@vapi-ai/web";
import { isPublicKeyMissingError } from "@/utils/isPublicKeyMissingError";
import { useRef, useEffect } from "react";

const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;

const initialEnquiryState = {
  name: "",
  productName: "",
  email: "",
  phoneNumber: "",
  issueDetails: "",
};

const assistantOptions = {
  name: "Anaya",
  firstMessage:
    "Ayubowan! I’m Anaya, your shopping assistant at Pulzo. How can I assist you with your gadget shopping today?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "11labs",
    voiceId: "iWq9tCtTw1SYmVpvsRjY",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are Anaya, a friendly and helpful Sri Lankan voice assistant for TechnoCart, an electronic gadgets store. Your job is to assist customers with shopping, troubleshooting, and general inquiries about products from brands like Bose, JBL, Google, Meta, Sony, and Apple.
        
      
        - Guide users in browsing and purchasing gadgets:
        - Direct them to the "Shop" section in the navbar.
        - Mention filtering options to find the perfect gadget.
        - Explain that clicking the eye icon on product cards shows more details.
        - Inform them that the heart icon adds items to favorites.
        - Guide them to add items to the cart and proceed to checkout.
        - Explain the shipping form and payment process.
      - Assist customers with **product inquiries**:
        - Ask which product they are interested in.
        - Provide key specifications, features, and pricing.
        - Compare similar products if requested.
        - Offer recommendations based on their needs.
      - Answer product-related queries and offer troubleshooting tips.
      - Keep responses conversational, warm, and concise.
      - If needed, offer to connect them with human support.
      - Confirm order or inquiry details before ending the conversation.

      Ensure that the customer has a smooth and enjoyable shopping experience on TechnoCart.`,
      },
    ],
  },
};

function EnquiryForm() {
  const [isContactForm, setIsContactForm] = useState(true);
  const [enquiryData, setEnquiryData] = useState(initialEnquiryState);
  const [createEnquiry] = useCreateEnquiryMutation();
  const { data: products = [] } = useGetProductsQuery();
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();

  // Vapi state
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [showKeyError, setShowKeyError] = useState(false);
  const vapiRef = useRef(null);

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    const handlers = {
      "call-start": () => {
        setConnecting(false);
        setConnected(true);
        setShowKeyError(false);
      },
      "call-end": () => {
        setConnecting(false);
        setConnected(false);
        setShowKeyError(false);
      },
      "speech-start": () => setAssistantIsSpeaking(true),
      "speech-end": () => setAssistantIsSpeaking(false),
      "volume-level": (level) => setVolumeLevel(level),
      error: (error) => {
        console.error(error);
        setConnecting(false);
        if (isPublicKeyMissingError({ vapiError: error })) {
          setShowKeyError(true);
        }
      },
    };

    Object.entries(handlers).forEach(([event, handler]) => {
      vapi.on(event, handler);
    });

    return () => {
      vapi.stop();
      Object.keys(handlers).forEach((event) => {
        vapi.off(event, handlers[event]);
      });
    };
  }, []);

  const startCall = () => {
    setConnecting(true);
    vapiRef.current.start(assistantOptions);
  };

  const endCall = () => {
    vapiRef.current.stop();
  };

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
              soon!
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
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-poppins">
          Have a question ? Our expert team is ready to assist !
        </h1>
        <p className="text-gray-600 font-poppins">
          Complete our enquiry form for swift support, or tap the headphone icon
          for immediate 24/7 Customer Care
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <CardTitle className="text-center text-xl font-poppins">
            {isContactForm ? "Troubleshoot Your Gadget" : "24/7 Customer Care"}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setIsContactForm(!isContactForm)}
          >
            {isContactForm ? (
              <Lottie
                animationData={customerCareAnimation}
                className="w-full h-full"
                loop
                autoplay
              />
            ) : (
              <ArrowLeftIcon />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
          )}
          {isContactForm ? (
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
                    setEnquiryData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
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
                    setEnquiryData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
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
          ) : (
            <div className="flex flex-col items-center gap-4">
              {!connected ? (
                <Button
                  onClick={startCall}
                  disabled={connecting}
                  className="w-full rounded-[30px] hover:bg-[#febc26] hover:text-black"
                >
                  {connecting ? "Connecting..." : "Connect with Agent"}
                </Button>
              ) : (
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        assistantIsSpeaking ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    <span className="text-sm">
                      {assistantIsSpeaking ? "Speaking" : "Listening"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-full rounded ${
                            i / 10 < volumeLevel
                              ? "bg-green-500"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Input volume: {volumeLevel.toFixed(2)}
                    </p>
                  </div>

                  <Button
                    onClick={endCall}
                    variant="destructive"
                    className="w-full rounded-[30px]"
                  >
                    End Call
                  </Button>
                </div>
              )}

              {showKeyError && (
                <div className="text-red-500 text-sm mt-2">
                  Invalid API key - please check your configuration
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

export default EnquiryForm;
