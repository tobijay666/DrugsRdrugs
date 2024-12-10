import React, { useState } from "react";
import { login } from "../services/authService";
import InputField from "../components/Auth/InputField";
import Button from "../components/Auth/Button";
import "../components/Auth/Auth.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      setMessage(response.message || "Login successful!");
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <InputField
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Button type="submit">Login</Button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
