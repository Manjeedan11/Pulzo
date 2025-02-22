// src/components/PaymentStatus.js
import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

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
    <div className="payment-status">
      {status === "succeeded" && (
        <>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </>
      )}
      {status === "processing" && (
        <>
          <h2>Processing Payment...</h2>
          <p>Your payment is being processed. Please wait.</p>
        </>
      )}
      {status === "failed" && (
        <>
          <h2>Payment Failed</h2>
          <p>Please try again or contact support.</p>
          <button onClick={() => navigate("/shop/checkout")}>
            Retry Payment
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentStatusPage;
