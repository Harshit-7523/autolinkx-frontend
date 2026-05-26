import React, { useEffect, useState } from "react";

import axios from "axios";

function OrdersPage() {

  const [orders, setOrders] = useState([]);

  // const userId = 1;
  const userId = localStorage.getItem("userId");

  // ✅ FETCH ORDERS

  const fetchOrders = async () => {

    try {

      const response = await axios.get(
        // `http://localhost:8080/order/${userId}`
        `https://autolinkx-backend.onrender.com/order/${userId}`
      );

      console.log(response.data);

      setOrders(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchOrders();

  }, []);

  return (

    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-6xl font-bold mb-12">
        📦 My Orders
      </h1>

      {/* ✅ EMPTY */}

      {orders.length === 0 ? (

        <div className="text-3xl font-semibold">
          No Orders Found
        </div>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              mb-10
            "
          >

            {/* ORDER HEADER */}

            <h2 className="text-3xl font-bold mb-4">
              Order ID: {order.id}
            </h2>

            <p className="text-2xl font-semibold mb-8">
              Total: ₹{order.totalAmount}
            </p>

            {/* ORDER ITEMS */}

            {order.items.map((item) => (

              <div
                key={item.id}
                className="
                  border
                  rounded-2xl
                  p-6
                  mb-6
                "
              >

                <h3 className="text-2xl font-bold">
                  {item.productName}
                </h3>

                <p className="text-xl mt-2">
                  Price: ₹{item.price}
                </p>

                <p className="text-xl mt-2">
                  Quantity: {item.quantity}
                </p>

              </div>

            ))}

          </div>

        ))

      )}

    </div>
  );
}

export default OrdersPage;