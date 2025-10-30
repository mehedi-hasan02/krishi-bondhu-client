import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
