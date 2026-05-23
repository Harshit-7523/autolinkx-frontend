import React, { useEffect, useState } from "react";
import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080"
  baseURL: "https://autolinkx-backend.onrender.com"
});

function Orders() {

  const [orders, setOrders] = useState([]);

  const userId = localStorage.getItem("userId") || 1;

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const res = await API.get(`/order/${userId}`);

      setOrders(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  return (

    <div className="container mt-4">

      <h2>📦 My Orders</h2>

      {orders.length === 0 ? (

        <h5>No Orders Found</h5>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="card p-3 mb-4 shadow"
          >

            <h4>Order ID: {order.id}</h4>

            <h5>Total: ₹{order.totalAmount}</h5>

            <hr />

            {order.items.map((item, index) => (

              <div
                key={index}
                className="border p-2 mb-2"
              >

                <h5>{item.productName}</h5>

                <p>Price: ₹{item.price}</p>

                <p>Quantity: {item.quantity}</p>

              </div>

            ))}

          </div>

        ))
      )}

    </div>

  );
}

export default Orders;