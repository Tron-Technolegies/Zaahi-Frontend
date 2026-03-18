import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Categories,
  Collections,
  Home,
  MyProfile,
  PaymentDetails,
  ProductDetails,
  ProductReviews,
  Review,
  Shipping,
  ShoppingBag,
  SignIn,
  SignUp,
  Wishlist,
  Error,
  Cart,
} from "./Pages";
import HomeLayout from "./Pages/HomeLayout";
import OrderConfirmed from "./Pages/OrderConfirmed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// import { ToastContainer } from 'react-toastify';

import AccountSettings from "./Pages/AccountSettings";
import MyOrders from "./Pages/MyOrders";
import AddressPage from "./Pages/AddressPage";

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 3 } },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/product-reviews/:id",
        element: <ProductReviews />,
      },
      {
        path: "/review",
        element: <Review />,
      },

      {
        path: "/shipping",
        element: <Shipping />,
      },
      {
        path: "/order-confirmed",
        element: <OrderConfirmed />,
      },
      {
        path: "account",
        element: <AccountSettings />,
        children: [
          { index: true, element: <MyProfile /> },
          { path: "profile", element: <MyProfile /> },
          { path: "orders", element: <MyOrders /> },
          { path: "address", element: <AddressPage /> },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/shopping-bag",
    element: <ShoppingBag />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Toaster position="top-right" theme="dark" />
      <ReactQueryDevtools initialIsOpen />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
