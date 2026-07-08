import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import { EnrollmentProvider } from "./context/EnrollmentContext";
//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <EnrollmentProvider>
      <App />
    </EnrollmentProvider>
  </BrowserRouter>
);