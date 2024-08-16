import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./Authproviders/AuthProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </div>
  </StrictMode>
);
