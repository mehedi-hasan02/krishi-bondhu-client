import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error from "../Pages/Shared/ErrorPage/Error";

import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ProductList from "../Pages/ProductList/ProductList";
import AddProduct from "../Pages/AddProduct/AddProduct";
import EditProduct from "../Pages/EditProduct/EditProduct";
import Contact from "../Pages/Contact/Contact";
import Roadmap from "../Pages/Roadmap/Roadmap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/roadmap",
        element: <Roadmap></Roadmap>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/myCart",
        element: <ProductList></ProductList>,
      },
      {
        path: "/products/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/edit",
        element: <EditProduct></EditProduct>,
      },
    ],
  },
]);

export default router;