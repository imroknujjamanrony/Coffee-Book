import { createBrowserRouter, Routes } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffes from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeCards from "../components/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./categories.json"),
        children: [
          {
            path: "/categories",
            element: <CoffeCards></CoffeCards>,
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffes></Coffes>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default routes;
