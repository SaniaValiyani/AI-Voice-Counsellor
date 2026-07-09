import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routes";
import AppInitializer from "./components/AppInitializer";
import "./i18n";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppInitializer>
      <RouterProvider router={router} />
      <Toaster
        richColors
        position="top-right"
      />
    </AppInitializer>
  </React.StrictMode>
);