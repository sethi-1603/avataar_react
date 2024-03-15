import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import CarouselConceptProvider from "./context/carouselConcept";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarouselConceptProvider>
      <App />
    </CarouselConceptProvider>
  </React.StrictMode>
);
