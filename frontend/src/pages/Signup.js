// import React, { useState } from "react";
// import { signup } from "../services/authService";
// import "../components/Auth/Auth.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user", // Default role
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await signup(formData);
//       setMessage(response.message || "Signup successful! Please log in.");
//     } catch (error) {
//       setMessage(error);
//     }
//   };

//   return (
//     <div className="auth-container mt-5">
//       <div className="title">
//         <h3>Signup</h3>
//         <p className="lead text-muted">Create an account to get started</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="row mb-3">
//           <div className="col-sm-12">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col-sm-12">
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row mb-3">
//           <div className="col-sm-12">
//             <div className="form-group">
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-12 pb-3 text-center">
//             <button className="btn btn-primary btn-block" type="submit">
//               Signup
//             </button>
//           </div>
//         </div>
//       </form>
//       <p className="text-center text-primary">
//         Already have an account?{" "}
//         <a
//           href="/login"
//           class="btn btn-link"
//           onClick={() => (window.location.href = "/login")}
//         >
//           Login
//         </a>
//       </p>
//       {message && <p className="text-danger mt-3">{message}</p>}
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { signup } from "../services/authService";
import "../components/Auth/Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // Added new state for confirm password
    role: "user", // Default role
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return; // Prevent form submission if passwords don't match
    }
    try {
      const response = await signup(formData);
      setMessage(response.message || "Signup successful! Please log in.");
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className="auth-container mt-5">
      <div className="title">
        <h3>Signup</h3>
        <p className="lead text-muted">Create an account to get started</p>
        {message && <p className="text-danger mt-3">{message}</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
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
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
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
                value={formData.password}
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
                name="confirmPassword" // Added confirm password field
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 pb-3 text-center">
            <button className="btn btn-primary btn-block" type="submit">
              Signup
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-primary">
        Already have an account?{" "}
        <a href="/login" class="btn btn-link">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
