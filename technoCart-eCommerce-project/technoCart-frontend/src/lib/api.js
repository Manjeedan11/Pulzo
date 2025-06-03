import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fed-pulzo-backend-manjeedan.vercel.app/api/",
    prepareHeaders: async (headers, { getState }) => {
      const token = await window.Clerk?.session?.getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getCategories: builder.query({
      query: () => `categories`,
    }),
    getOrder: builder.query({
      query: (id) => `orders/${id}`,
    }),
    getOrders: builder.query({
      query: () => `orders`,
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: `orders`,
        method: "POST",
        body,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
    }),
    createEnquiry: builder.mutation({
      query: (enquiry) => ({
        url: "enquires",
        method: "POST",
        body: enquiry,
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (amount) => ({
        url: "stripePayments/create-payment-intent",
        method: "POST",
        body: { amount },
      }),
    }),

    updateOrderPaymentStatus: builder.mutation({
      query: ({ id, paymentStatus }) => ({
        url: `orders/${id}/payment-status`,
        method: "PUT",
        body: { paymentStatus },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
  useGetOrdersQuery,
  useCreateProductMutation,
  useCreateEnquiryMutation,
  useCreatePaymentIntentMutation,
  useUpdateOrderPaymentStatusMutation,
} = Api;

//https://fed-pulzo-backend-manjeedan.vercel.app/api/
//http://localhost:8000/api/

const products = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    _id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    _id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    _id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    _id: "4",
    name: "Bose QuiteComfort",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    _id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    _id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    _id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    _id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

const categories = [
  { _id: "ALL", name: "ALL" },
  { _id: "1", name: "Headphones" },
  { _id: "2", name: "Earbuds" },
  { _id: "3", name: "Speakers" },
  { _id: "4", name: "Mobile Phones" },
  { _id: "5", name: "Smart Watches" },
];
