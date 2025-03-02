import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPaymentIntent = async (amount: number) => {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert dollars to cents
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });
};
