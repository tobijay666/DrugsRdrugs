import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../components/Auth/Auth.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
      navigate("/dashboard");
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className="auth-container mt-5">
      <div className="title">
        <h3>Login</h3>
        <p className="lead text-muted">
          Enter your credentials to access your account
        </p>
        {message && <p className="text-danger mt-3">{message}</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-12">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12">
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 pb-3 text-center">
            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-primary">
        Don't have an account?{" "}
        <a
          href="/signup"
          class="btn btn-link"
          onClick={() => (window.location.href = "/signup")}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
