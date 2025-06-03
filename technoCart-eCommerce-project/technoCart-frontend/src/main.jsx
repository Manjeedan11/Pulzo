import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

import { store } from "@/lib/store.js";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

import RootLayout from "./layouts/root.layout.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPreviewPage from "./pages/ProductPreviewPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import PaymentStatusPage from "./pages/PaymentStatusPage.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import MainLayout from "./layouts/main.layout.jsx";
import Protected from "./layouts/Protected.jsx";
import AdminProtected from "./layouts/AdminProtected.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route element={<Protected />}>
                <Route path="/shop" element={<ShopPage />} />
                <Route
                  path="/shop/product/preview"
                  element={<ProductPreviewPage />}
                />
                <Route path="/shop/cart" element={<CartPage />} />
                <Route path="/shop/cart/checkout" element={<CheckOutPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/shop/favorites" element={<FavoritePage />} />
                <Route path="/shop/search" element={<SearchPage />} />
                <Route
                  path="/shop/cart/checkout/paymentPortal"
                  element={<PaymentPage />}
                />
                <Route
                  path="/payment-status"
                  element={
                    <Elements stripe={stripePromise}>
                      <PaymentStatusPage />
                    </Elements>
                  }
                />

                <Route element={<AdminProtected />}>
                  <Route path="/admin" element={<AdminDashboardPage />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ClerkProvider>
  //</StrictMode>
);
