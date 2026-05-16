import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AboutSection from "./components/AboutSection";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import ProductList from "./components/ProductList";

import CartPage from "./components/CartPage";

// ✅ FIXED IMPORT
import OrdersPage from "./components/OrderPage";

import LoginPage from "./components/LoginPage";

import SignupPage from "./components/SignupPage";

import ProtectedRoute from "./components/ProtectedRoute";

// ✅ IMPORT IMAGES

import construction from "./assets/construction.png";

import agriculture from "./assets/agriculture.png";

import scissor from "./assets/scissor.png";

import rockbreaker from "./assets/rockbreaker.png";

import car from "./assets/car.png";

import scooter from "./assets/scooter.png";

import motorcycle from "./assets/motorcycle.png";

// ✅ Toastify

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <Router>

      {/* ✅ Navbar */}

      <Navbar />

      {/* ✅ Routes */}

      <Routes>

        {/* ✅ Login */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* ✅ Signup */}

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        {/* ✅ Products */}

        <Route
          path="/products"
          element={
            <ProtectedRoute>

              <>

                {/* ✅ PRODUCTS */}

                <ProductList />

                {/* ✅ ABOUT */}

                <AboutSection />

                {/* ✅ GROUP BUSINESS VERTICALS */}

                <section
                  className="
                    bg-[#f5f5f5]
                    py-24
                    px-6
                    relative
                    overflow-hidden
                  "
                >

                  {/* ✅ WORLD MAP */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-10
                      bg-center
                      bg-contain
                      bg-no-repeat
                    "
                    style={{
                      backgroundImage:
                        "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                    }}
                  ></div>

                  <div className="relative z-10">

                    {/* ✅ HEADING */}

                    <div className="text-center mb-20">

                      <h2
                        className="
                          text-5xl
                          font-bold
                          text-indigo-900
                        "
                      >
                        Group Business Verticals
                      </h2>

                      <p
                        className="
                          text-gray-700
                          mt-5
                          text-lg
                        "
                      >
                        Versatile Vertical Business
                        with Various Product Category
                      </p>

                      <div
                        className="
                          w-36
                          h-1
                          bg-indigo-900
                          mx-auto
                          mt-6
                        "
                      ></div>

                    </div>

                    {/* ✅ TOP ROW */}

                    <div
                      className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-12
                        max-w-7xl
                        mx-auto
                        mb-20
                      "
                    >

                      <div className="text-center">

                        <img
                          src={construction}
                          alt="Construction"

                          className="
                            mx-auto
                            h-52
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-4xl
                            text-indigo-900
                            mt-4
                            font-medium
                          "
                        >
                          Const. Equipment
                        </h3>

                      </div>

                      <div className="text-center">

                        <img
                          src={agriculture}
                          alt="Agriculture"

                          className="
                            mx-auto
                            h-52
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-4xl
                            text-indigo-900
                            mt-4
                            font-medium
                          "
                        >
                          Agriculture Equipment
                        </h3>

                      </div>

                      <div className="text-center">

                        <img
                          src={scissor}
                          alt="Scissor"

                          className="
                            mx-auto
                            h-52
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-4xl
                            text-indigo-900
                            mt-4
                            font-medium
                          "
                        >
                          Scissor Lift
                        </h3>

                      </div>

                      <div className="text-center">

                        <img
                          src={rockbreaker}
                          alt="Rock Breaker"

                          className="
                            mx-auto
                            h-52
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-4xl
                            text-indigo-900
                            mt-4
                            font-medium
                          "
                        >
                          Rock Breaker
                        </h3>

                      </div>

                    </div>

                    {/* ✅ BOTTOM ROW */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-16
                        max-w-7xl
                        mx-auto
                      "
                    >

                      <div className="text-center">

                        <img
                          src={car}
                          alt="Car"

                          className="
                            mx-auto
                            h-72
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-5xl
                            text-indigo-900
                            mt-6
                            font-medium
                          "
                        >
                          4W - Car
                        </h3>

                      </div>

                      <div className="text-center">

                        <img
                          src={scooter}
                          alt="Scooter"

                          className="
                            mx-auto
                            h-72
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-5xl
                            text-indigo-900
                            mt-6
                            font-medium
                          "
                        >
                          2W - Scooter
                        </h3>

                      </div>

                      <div className="text-center">

                        <img
                          src={motorcycle}
                          alt="Motorcycle"

                          className="
                            mx-auto
                            h-72
                            object-contain
                          "
                        />

                        <h3
                          className="
                            text-5xl
                            text-indigo-900
                            mt-6
                            font-medium
                          "
                        >
                          2W - Motorcycle
                        </h3>

                      </div>

                    </div>

                  </div>

                </section>

              </>

            </ProtectedRoute>
          }
        />

        {/* ✅ Cart */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        {/* ✅ FIXED ORDERS */}

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />

        {/* ✅ Default */}

        <Route
          path="/"
          element={<LoginPage />}
        />

      </Routes>

      {/* ✅ Footer */}

      <Footer />

      {/* ✅ Toast */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </Router>
  );
}

export default App;