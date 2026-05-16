import React from "react";

import logo from "../assets/logo.png";

function Footer() {

  return (

    <footer
      className="
        mt-12
        bg-black
        text-white
        border-t
        border-gray-800
      "
    >

      {/* ✅ TOP FOOTER */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-10
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >

        {/* ✅ COMPANY INFO */}

        <div>

          <div className="flex items-center gap-4 mb-5">

            <img
              src={logo}
              alt="AutoLinkX"

              className="
                w-16
                h-16
                object-contain
              "
            />

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-white
              ">
                AutoLinkX
              </h2>

              <p className="
                text-gray-400
                text-sm
              ">
                Industrial Automotive Solutions
              </p>

            </div>

          </div>

          <p className="
            text-gray-400
            leading-8
            text-sm
          ">

            AutoLinkX delivers premium
            automotive components,
            tubular assemblies,
            precision engineering
            and industrial solutions.

          </p>

        </div>

        {/* ✅ IMPORTANT LINKS */}

        <div>

          <h3 className="
            text-xl
            font-bold
            mb-5
            text-white
          ">
            Important Links
          </h3>

          <ul className="
            space-y-3
            text-gray-400
            text-sm
          ">

            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Products
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Services
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Customers
            </li>

          </ul>

        </div>

        {/* ✅ SERVICES */}

        <div>

          <h3 className="
            text-xl
            font-bold
            mb-5
            text-white
          ">
            Industrial Services
          </h3>

          <ul className="
            space-y-3
            text-gray-400
            text-sm
          ">

            <li>
              Precision Engineering
            </li>

            <li>
              Tubular Components
            </li>

            <li>
              Welding Solutions
            </li>

            <li>
              Sheet Metal Products
            </li>

          </ul>

        </div>

        {/* ✅ CONTACT */}

        <div>

          <h3 className="
            text-xl
            font-bold
            mb-5
            text-white
          ">
            Contact
          </h3>

          <div className="
            text-gray-400
            space-y-4
            text-sm
            leading-7
          ">

            <p>

              Noida Industrial Area,
              Sector 21,
              India

            </p>

            <p>
              support@autolinkx.com
            </p>

            <p>
              +91 9876543210
            </p>

          </div>

        </div>

      </div>

      {/* ✅ BOTTOM */}

      <div
        className="
          border-t
          border-gray-800
          text-center
          py-4
        "
      >

        <p className="
          text-gray-500
          text-sm
        ">

          © 2026 AutoLinkX —
          All Rights Reserved

        </p>

      </div>

    </footer>
  );
}

export default Footer;