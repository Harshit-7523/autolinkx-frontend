import React from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("userId");

    navigate("/login");
  };

  return (

    <nav
      className="
        sticky
        top-0
        z-50

        bg-gradient-to-r
        from-[#08115f]
        via-[#0b1833]
        to-[#101826]

        p-4
        flex
        justify-between
        items-center
        shadow-xl
      "
    >

      {/* ✅ LOGO */}

      <Link
        to="/products"

        className="
          flex
          items-center
          gap-3
          text-3xl
          font-bold
          text-yellow-400
          hover:text-yellow-300
          transition
        "
      >

        {/* ✅ ICON */}

        <img
          src={logo}
          alt="AutoLinkX Logo"

          className="
            w-12
            h-12
            object-contain
            drop-shadow-lg
          "
        />

        {/* ✅ BRAND NAME */}

        <span>
          AutoLinkX
        </span>

      </Link>

      {/* ✅ NAV LINKS */}

      <div className="flex gap-4">

        {/* ✅ PRODUCTS */}

        <Link
          to="/products"

          className="
            bg-yellow-400
            hover:bg-yellow-300
            px-5
            py-2
            rounded-xl
            font-semibold
            transition
          "
        >
          Products
        </Link>

        {/* ✅ CART */}

        <Link
          to="/cart"

          className="
            bg-yellow-400
            hover:bg-yellow-300
            px-5
            py-2
            rounded-xl
            font-semibold
            transition
          "
        >
          Cart
        </Link>

        {/* ✅ ORDERS */}

        <Link
          to="/orders"

          className="
            bg-yellow-400
            hover:bg-yellow-300
            px-5
            py-2
            rounded-xl
            font-semibold
            transition
          "
        >
          Orders
        </Link>

        {/* ✅ ABOUT */}

        <a
          href="#about"

          className="
            bg-yellow-400
            hover:bg-yellow-300
            px-5
            py-2
            rounded-xl
            font-semibold
            transition
          "
        >
          About
        </a>

        {/* ✅ LOGOUT */}

        <button
          onClick={logout}

          className="
            bg-red-500
            hover:bg-red-400
            px-5
            py-2
            rounded-xl
            text-white
            font-semibold
            transition
          "
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;