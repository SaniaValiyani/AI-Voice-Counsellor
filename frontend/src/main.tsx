import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routes";
import AppInitializer from "./components/AppInitializer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppInitializer>

      <RouterProvider
        router={router}
      />

    </AppInitializer>
  </React.StrictMode>
);