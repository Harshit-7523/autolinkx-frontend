import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await axios.post(
        // "http://localhost:8080/auth/login",
        "https://autolinkx-backend.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      // ✅ save userId
      localStorage.setItem("userId", res.data.id);

      alert("Login Successful");

      // ✅ redirect
      navigate("/products");

    } catch (err) {

      alert("Login Failed");

    }
  };

  return (

    <div
      className="container"
      style={{
        maxWidth: "400px",
        marginTop: "100px",
      }}
    >

      <h2 className="text-center mb-4">
        Login
      </h2>

      {/* Email */}
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login Button */}
      <button
        className="btn btn-primary w-100"
        onClick={login}
      >
        Login
      </button>

      {/* Signup Button */}
      <button
        className="btn btn-link mt-2"
        onClick={() => navigate("/signup")}
      >
        Create New Account
      </button>

    </div>
  );
}

export default Login;