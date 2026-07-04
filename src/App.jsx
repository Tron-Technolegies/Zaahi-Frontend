import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import UserContextProvider from "./UserContext";
import { exchangeInfoLoader } from "./loader/CurrencyLoader";
import Loading from "./Components/Loading";

// Lazy load page components
const HomeLayout = lazy(() => import("./Pages/HomeLayout"));
const Home = lazy(() => import("./Pages/Home"));
const Collections = lazy(() => import("./Pages/Collections"));
const Categories = lazy(() => import("./Pages/Categories"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const Cart = lazy(() => import("./Pages/Cart"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const Review = lazy(() => import("./Pages/Review"));
const Shipping = lazy(() => import("./Pages/Shipping"));
const OrderConfirmed = lazy(() => import("./Pages/OrderConfirmed"));
const PrivacyPage = lazy(() => import("./Pages/PrivacyPage"));
const TermsPage = lazy(() => import("./Pages/TermsPage"));
const AccountSettings = lazy(() => import("./Pages/AccountSettings"));
const MyProfile = lazy(() => import("./Pages/MyProfile"));
const MyOrders = lazy(() => import("./Pages/MyOrders"));
const AddressPage = lazy(() => import("./Pages/AddressPage"));
const ChangePassword = lazy(() => import("./Pages/ChangePassword"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const ShoppingBag = lazy(() => import("./Pages/ShoppingBag"));
const SingleOrderStatus = lazy(() => import("./Pages/SingleOrderStatus"));
const Error = lazy(() => import("./Pages/Error"));

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 3, retry: false } },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomeLayout />
      </Suspense>
    ),
    loader: exchangeInfoLoader,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/collections",
        element: (
          <Suspense fallback={<Loading />}>
            <Collections />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<Loading />}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/review",
        element: (
          <Suspense fallback={<Loading />}>
            <Review />
          </Suspense>
        ),
      },
      {
        path: "/shipping",
        element: (
          <Suspense fallback={<Loading />}>
            <Shipping />
          </Suspense>
        ),
      },
      {
        path: "/order-confirmed",
        element: (
          <Suspense fallback={<Loading />}>
            <OrderConfirmed />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPage />
          </Suspense>
        ),
      },
      {
        path: "/terms",
        element: (
          <Suspense fallback={<Loading />}>
            <TermsPage />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<Loading />}>
            <AccountSettings />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <MyProfile />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loading />}>
                <MyProfile />
              </Suspense>
            ),
          },
          {
            path: "orders",
            element: (
              <Suspense fallback={<Loading />}>
                <MyOrders />
              </Suspense>
            ),
          },
          {
            path: "address",
            element: (
              <Suspense fallback={<Loading />}>
                <AddressPage />
              </Suspense>
            ),
          },
          {
            path: "password",
            element: (
              <Suspense fallback={<Loading />}>
                <ChangePassword />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<Loading />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/shopping-bag",
    element: (
      <Suspense fallback={<Loading />}>
        <ShoppingBag />
      </Suspense>
    ),
  },
  {
    path: "/orders/order-status/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <SingleOrderStatus />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Toaster position="top-right" theme="dark" />
      <ReactQueryDevtools initialIsOpen />
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default App;
