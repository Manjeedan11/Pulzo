import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import successAnimation from "@/assets/payment/success.json";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const PaymentStatusPage = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setStatus("succeeded");
          break;
        case "processing":
          setStatus("processing");
          break;
        case "requires_payment_method":
          setStatus("failed");
          break;
        default:
          setStatus("error");
      }
    });
  }, [stripe]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-20">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        {status === "succeeded" && (
          <>
            <Lottie
              animationData={successAnimation}
              loop={false}
              className="w-32 mx-auto"
            />
            <h2 className="text-2xl font-semibold font-poppins mt-4 text-green-600">
              Payment Successful!
            </h2>
            <p className="text-gray-600 font-poppins mt-2">
              Thank you for your purchase.
            </p>
            <InteractiveHoverButton
              onClick={() => navigate("/shop")}
              className="mt-6"
            >
              Continue Shopping
            </InteractiveHoverButton>
          </>
        )}
        {status === "processing" && (
          <>
            <h2 className="text-2xl font-semibold font-poppins text-blue-500">
              Processing Payment...
            </h2>
            <p className="text-gray-600 font-poppins mt-2">
              Your payment is being processed. Please wait.
            </p>
          </>
        )}
        {status === "failed" && (
          <>
            <h2 className="text-2xl font-semibold text-red-500">
              Payment Failed
            </h2>
            <p className="text-gray-600 mt-2">
              Please try again or contact support.
            </p>
            <button
              onClick={() => navigate("/shop/checkout")}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Retry Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatusPage;
