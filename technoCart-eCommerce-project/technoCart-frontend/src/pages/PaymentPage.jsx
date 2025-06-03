import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCreatePaymentIntentMutation } from "@/lib/api"; // Ensure correct path to API
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-status`,
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message || "An unexpected error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button type="submit" disabled={isLoading || !stripe} className="w-full">
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
      {message && <div className="text-red-500 text-sm">{message}</div>}
    </form>
  );
};

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [createPaymentIntent, { isLoading, error }] =
    useCreatePaymentIntentMutation();

  React.useEffect(() => {
    createPaymentIntent(129.99)
      .unwrap()
      .then((response) => setClientSecret(response.clientSecret))
      .catch(console.error);
  }, [createPaymentIntent]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <h2 className="text-xl font-semibold text-center">Secure Payment</h2>
        </CardHeader>
        <CardContent>
          {clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          ) : (
            <div className="text-center">Loading payment gateway...</div>
          )}
          {error && (
            <div className="text-red-500 text-center mt-2">
              Error: {error.message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
