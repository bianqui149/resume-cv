import React from "react";
import { Resume } from "./Pages/Resume";
import { createRoot } from "react-dom/client";

import  "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
          <Resume />
    </React.StrictMode>,
);
