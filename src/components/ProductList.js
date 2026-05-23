import React, { useEffect, useState } from "react";
import axios from "axios";
import blueprint from "../assets/blueprint.png";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

// PRODUCT IMAGES

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";

const API = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://autolinkx-backend.onrender.com",
});

function ProductList() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // const [search, setSearch] = useState("");
  const [search] = useState("");

  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      setLoading(true);

      await API.get("/products");

      const sampleProducts = [

        {
          id: 17,
          name: "Tubular Pipe",
          price: 1200,
          category: "Tubular",
          image: product1,
        },

        {
          id: 18,
          name: "Metal Stamping Plate",
          price: 1400,
          category: "Stamping",
          image: product2,
        },

        {
          id: 19,
          name: "Welded Frame",
          price: 3000,
          category: "Welded",
          image: product3,
        },

        {
          id: 20,
          name: "Fuel Rail Tube",
          price: 1800,
          category: "Tubular",
          image: product4,
        },

        {
          id: 21,
          name: "Chassis Tube",
          price: 2200,
          category: "Tubular",
          image: product5,
        },

        {
          id: 22,
          name: "Bent Tube Assembly",
          price: 1500,
          category: "Tubular",
          image: product6,
        },

        {
          id: 23,
          name: "Pipe Frame",
          price: 2700,
          category: "Tubular",
          image: product7,
        },

        {
          id: 24,
          name: "Industrial Disc",
          price: 2000,
          category: "Stamping",
          image: product8,
        },

        {
          id: 25,
          name: "Steel Cup",
          price: 900,
          category: "Stamping",
          image: product9,
        },

        {
          id: 26,
          name: "Pressed Bracket",
          price: 1300,
          category: "Stamping",
          image: product10,
        },

        {
          id: 27,
          name: "Stamping Clamp",
          price: 1100,
          category: "Stamping",
          image: product11,
        },

        {
          id: 28,
          name: "Metal Cover",
          price: 1600,
          category: "Stamping",
          image: product12,
        },

        {
          id: 29,
          name: "Welded Holder",
          price: 1700,
          category: "Welded",
          image: product13,
        },

        {
          id: 30,
          name: "Support Bracket",
          price: 2500,
          category: "Welded",
          image: product14,
        },

        {
          id: 31,
          name: "Mount Support",
          price: 2100,
          category: "Welded",
          image: product15,
        },

        {
          id: 32,
          name: "Bottle Holder",
          price: 1000,
          category: "Welded",
          image: product16,
        },

      ];

      setProducts(sampleProducts);

      setLoading(false);

    } catch (err) {

      console.error(err);

      setLoading(false);

      toast.error("❌ Failed To Load Products");
    }
  };

  const addToCart = async (productId) => {

    try {

      // const userId = 1;
      const userId = localStorage.getItem("userId");
      await API.post("/cart/add", {
        userId,
        productId,
        quantity: 1,
      });

      toast.success("✅ Added To Cart");

    } catch (err) {

      console.error(err);

      toast.error("❌ Failed");
    }
  };

  const buyNow = async (productId) => {

    try {

      // const userId = 1;
      const userId = localStorage.getItem("userId");

      await API.post("/cart/add", {
        userId,
        productId,
        quantity: 1,
      });

      await API.post(`/order/place/${userId}`);

      toast.success("✅ Order Placed Successfully");

    } catch (err) {

      console.error(err);

      toast.error("❌ Buy Now Failed");
    }
  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen text-4xl font-bold">
        Loading...
      </div>
    );
  }

  return (

    <div className="bg-gray-100 min-h-screen p-6">

      {/* HERO SECTION */}

      <div
        className="rounded-[40px] py-12 text-center relative overflow-hidden shadow-2xl mb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(33,60,89,0.92)), url(${blueprint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="max-w-7xl mx-auto px-7">

          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">

            <img
              src={logo}
              alt="AutoLinkX"
              className="w-28 h-20 object-contain"
            />

            <h1 className="text-6xl font-black text-white tracking-[4px] uppercase">
              AutoLinkX
            </h1>

          </div>

          <div className="w-72 h-2 bg-yellow-400 rounded-full mx-auto mb-8"></div>

          <p className="text-2xl text-yellow-300 font-semibold mb-6">
            Inspired By Modern Automotive Manufacturing Industries
          </p>

          <p className="text-gray-300 text-lg leading-9 max-w-5xl mx-auto">
            AutoLinkX delivers high-quality engineering components,
            precision sheet metal products, tubular assemblies,
            welded parts, and industrial solutions for modern
            automotive manufacturing industries.
          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">

              <h2 className="text-2xl font-bold mb-2">
                {product.name}
              </h2>

              <p className="text-green-600 text-xl font-semibold mb-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product.id)}
                className="mt-2 bg-yellow-400 hover:bg-yellow-500 w-full py-3 rounded-xl text-lg font-bold"
              >
                Add To Cart
              </button>

              <button
                onClick={() => buyNow(product.id)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl text-white font-bold"
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;