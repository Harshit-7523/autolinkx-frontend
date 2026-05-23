import React, { useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

const API = axios.create({
  // baseURL: "http://localhost:8080"
  baseURL: "https://autolinkx-backend.onrender.com"
});

function SignupPage() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signup = async () => {

    try {

      const res = await API.post("/auth/signup", {
        name,
        email,
        password
      });

      toast.success(res.data);

    } catch (err) {

      console.error(err);

      toast.error("❌ Signup Failed");
    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4 text-center">
          📝 Signup
        </h2>

        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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
          className="btn btn-success w-100"
          onClick={signup}
        >
          Signup
        </button>

      </div>

    </div>
  );
}

export default SignupPage;