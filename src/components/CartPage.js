import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function CartPage() {

  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const userId = 1;

  // ✅ FETCH CART

  const fetchCart = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/cart/${userId}`
      );

      setCartItems(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchCart();

  }, []);

  // ✅ INCREASE QUANTITY

  const increaseQuantity = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/cart/increase/${id}`
      );

      fetchCart();

    } catch (error) {

      console.log(error);
    }
  };

  // ✅ DECREASE QUANTITY

  const decreaseQuantity = async (id) => {

    try {

      await axios.put(
        `http://localhost:8080/cart/decrease/${id}`
      );

      fetchCart();

    } catch (error) {

      console.log(error);
    }
  };

  // ✅ REMOVE ITEM

  const removeItem = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/cart/delete/${id}`
      );

      fetchCart();

    } catch (error) {

      console.log(error);
    }
  };

  // ✅ PLACE ORDER

  const placeOrder = async () => {

    try {

      await axios.post(
        `http://localhost:8080/order/place/${userId}`
      );

      alert("Order placed successfully!");

      fetchCart();

      navigate("/orders");

    } catch (error) {

      console.log(error);

      alert("Order failed");
    }
  };

  // ✅ TOTAL

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-6xl font-bold mb-12">
        🛒 My Cart
      </h1>

      {/* ✅ EMPTY CART */}

      {cartItems.length === 0 ? (

        <div className="text-3xl font-semibold">
          Your Cart Is Empty
        </div>

      ) : (

        <>

          {/* ✅ CART ITEMS */}

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-8
                mb-8
                flex
                justify-between
                items-center
              "
            >

              {/* LEFT */}

              <div>

                <h2 className="text-4xl font-bold mb-4">
                  {item.productName}
                </h2>

                <p className="text-3xl font-bold text-green-600">
                  ₹{item.price}
                </p>

                <p className="text-xl mt-3">
                  Quantity: {item.quantity}
                </p>

              </div>

              {/* RIGHT BUTTONS */}

              <div className="flex gap-4">

                {/* + BUTTON */}

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  className="
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    text-2xl
                    font-bold
                  "
                >
                  +
                </button>

                {/* - BUTTON */}

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="
                    bg-yellow-400
                    hover:bg-yellow-500
                    text-black
                    px-6
                    py-3
                    rounded-xl
                    text-2xl
                    font-bold
                  "
                >
                  -
                </button>

                {/* REMOVE BUTTON */}

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    text-xl
                    font-bold
                  "
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          {/* ✅ TOTAL */}

          <div className="mt-10">

            <h2 className="text-5xl font-bold mb-6">
              Total: ₹{total}
            </h2>

            {/* PLACE ORDER */}

            <button
              onClick={placeOrder}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-10
                py-5
                rounded-2xl
                text-2xl
                font-bold
              "
            >
              Place Order
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default CartPage;