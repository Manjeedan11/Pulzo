import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCreatePaymentIntentMutation } from "@/lib/api"; // Ensure correct path to API

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
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isLoading || !stripe}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
      {message && <div className="error-message">{message}</div>}
    </form>
  );
};

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [createPaymentIntent, { isLoading, error }] =
    useCreatePaymentIntentMutation();

  React.useEffect(() => {
    createPaymentIntent(10.99)
      .unwrap()
      .then((response) => setClientSecret(response.clientSecret))
      .catch(console.error);
  }, [createPaymentIntent]);

  return (
    <div className="payment-container">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div>Loading payment gateway...</div>
      )}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default PaymentPage;
