import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ API instance
const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  }
});

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Get userId dynamically from login
  const userId = localStorage.getItem("userId");

  // 🔹 Fetch Cart Items
  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/cart/${userId}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🔹 Update Quantity
  const updateQuantity = async (item, change) => {
    const newQty = item.quantity + change;
    if (newQty < 1) return;

    try {
      await API.put("/cart/update", {
        id: item.id,
        quantity: newQty
      });
      fetchCart();
    } catch (err) {
      console.error("Update quantity error:", err);
      alert("❌ Could not update quantity");
    }
  };

  // 🔹 Delete Item
  const deleteItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      alert("✅ Item removed");
      fetchCart();
    } catch (err) {
      console.error("Delete item error:", err);
      alert("❌ Could not remove item");
    }
  };

  // 🔹 Place Order
  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert("❌ Cart is empty");
      return;
    }

    try {
      await API.post(`/orders/${userId}`);
      alert("✅ Order placed successfully");
      fetchCart(); // clear cart after order
    } catch (err) {
      console.error("Place order error:", err);
      alert("❌ Failed to place order");
    }
  };

  if (loading) return <h3 className="text-center mt-5">Loading cart...</h3>;
  if (error) return <h3 className="text-center text-danger mt-5">{error}</h3>;

  return (
    <div className="container mt-4">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <h5>No items in your cart</h5>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="card p-3 mb-2 shadow">
            <h5>{item.productName}</h5>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <div className="d-flex gap-2 mb-2">
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item, 1)}>➕</button>
              <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item, -1)}>➖</button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteItem(item.id)}>❌ Remove</button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <button className="btn btn-success mt-3" onClick={placeOrder}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default CartPage;