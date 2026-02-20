import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import StudentReviews from "../components/StudentReviews";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Checkout from "../components/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/reviews",
        Component: StudentReviews,
      },
      {
        path: "/features",
        Component: Features,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/checkout",
        Component: Checkout,
      },
    ],
  },
]);
