import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignIn, SignUp } from "./Pages";
import HomeLayout from "./Pages/HomeLayout";
import Collections from "./Pages/Collections";
import ProductDetails from "./Pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }],
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
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/product-details",
    element: <ProductDetails />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
