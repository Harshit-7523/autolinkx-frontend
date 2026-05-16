import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

// ✅ Toastify
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(

  <React.StrictMode>

    <App />

    {/* ✅ Toast Container */}

    <ToastContainer
      position="top-right"
      autoClose={2000}
    />

  </React.StrictMode>
);