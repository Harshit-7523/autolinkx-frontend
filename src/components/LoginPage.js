import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "http://localhost:8080"
});

function LoginPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      if (typeof res.data === "string") {

        toast.error(res.data);

      } else {

        localStorage.setItem("userId", res.data.id);

        toast.success("✅ Login Successful");

        navigate("/products");
      }

    } catch (err) {

      console.error(err);

      toast.error("❌ Login Failed");
    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4 text-center">
          🔐 Login
        </h2>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;