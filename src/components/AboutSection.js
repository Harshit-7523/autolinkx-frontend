import React from "react";

function AboutSection() {

  return (

    <section
      id="about"

      className="
        bg-[#eef3f8]
        py-24
        px-6
      "
    >

      {/* TOP HEADING */}

      <div className="max-w-7xl mx-auto text-center">

        <h2
          className="
            text-5xl
            font-bold
            text-indigo-900
          "
        >
          About AutoLinkX
        </h2>

        <p
          className="
            text-gray-600
            mt-5
            text-xl
          "
        >
          Ecommerce Platform For Indo Autotech Limited
        </p>

        <div
          className="
            w-40
            h-1
            bg-indigo-900
            mx-auto
            mt-6
            rounded-full
          "
        ></div>

      </div>

      {/* MAIN ABOUT */}

      <div
        className="
          max-w-7xl
          mx-auto
          mt-20
          grid
          lg:grid-cols-2
          gap-14
          items-center
        "
      >

        {/* LEFT */}

        <div>

          <h3
            className="
              text-4xl
              font-bold
              text-indigo-900
              mb-8
            "
          >
            Your Partner In Innovation
          </h3>

          <p
            className="
              text-gray-700
              text-lg
              leading-9
              mb-6
            "
          >
            AutoLinkX is a modern ecommerce platform
            developed specially for Indo Autotech Limited
            to showcase and manage automotive products,
            industrial components, tubular assemblies,
            welded parts, precision engineering products,
            and manufacturing solutions.
          </p>

          <p
            className="
              text-gray-700
              text-lg
              leading-9
              mb-6
            "
          >
            Inspired by Indo Autotech Limited’s legacy
            in automotive manufacturing, AutoLinkX helps
            customers explore products easily, place
            orders online, manage carts, and experience
            a modern digital automotive marketplace.
          </p>

          <p
            className="
              text-gray-700
              text-lg
              leading-9
            "
          >
            Our mission is to connect innovation,
            engineering excellence, industrial quality,
            and modern ecommerce technology into one
            powerful platform for automotive industries.
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-8
          "
        >

          {/* CARD 1 */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              hover:-translate-y-2
              transition
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-indigo-900
                mb-4
              "
            >
              Who We Are
            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >
              AutoLinkX is an ecommerce solution
              designed for Indo Autotech Limited
              to simplify automotive product
              management and customer purchasing.
            </p>

          </div>

          {/* CARD 2 */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              hover:-translate-y-2
              transition
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-indigo-900
                mb-4
              "
            >
              Our Mission
            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >
              Deliver premium automotive and
              industrial products with innovation,
              precision engineering, and modern
              ecommerce experience.
            </p>

          </div>

          {/* CARD 3 */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              hover:-translate-y-2
              transition
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-indigo-900
                mb-4
              "
            >
              What We Do
            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >
              We provide industrial product
              browsing, order management,
              cart systems, and digital
              automotive commerce solutions.
            </p>

          </div>

          {/* CARD 4 */}

          <div
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              hover:-translate-y-2
              transition
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-indigo-900
                mb-4
              "
            >
              Engineering Quality
            </h3>

            <p
              className="
                text-gray-600
                leading-8
              "
            >
              Inspired by Indo Autotech’s
              manufacturing excellence and
              commitment to global automotive
              quality standards.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;