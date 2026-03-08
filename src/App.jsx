import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ChangePassword,
  Collections,
  Home,
  MyOrder,
  MyProfile,
  PaymentDetails,
  ProductDetails,
  ProductReviews,
  Review,
  SavedAddress,
  Shipping,
  ShoppingBag,
  SignIn,
  SignUp,
  Wishlist,
} from './Pages';
import HomeLayout from './Pages/HomeLayout';
import OrderConfirmed from './Pages/OrderConfirmed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 3 } },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/collections',
    element: <Collections />,
  },

  {
    path: '/shopping-bag',
    element: <ShoppingBag />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/change-password',
    element: <ChangePassword />,
  },
  {
    path: '/myorder',
    element: <MyOrder />,
  },
  {
    path: '/myprofile',
    element: <MyProfile />,
  },
  {
    path: '/payment-details',
    element: <PaymentDetails />,
  },
  {
    path: '/product-details',
    element: <ProductDetails />,
  },
  {
    path: '/product-reviews',
    element: <ProductReviews />,
  },
  {
    path: '/review',
    element: <Review />,
  },
  {
    path: '/saved-address',
    element: <SavedAddress />,
  },
  {
    path: '/shipping',
    element: <Shipping />,
  },
  {
    path: '/order-confirmed',
    element: <OrderConfirmed />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ToastContainer position='top-right' theme='dark' />
      <ReactQueryDevtools initialIsOpen />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
