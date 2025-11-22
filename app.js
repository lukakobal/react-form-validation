import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // State za inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State za napake
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // univerzalni handler za vse inpute
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validacija ob submitu
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    // --- VALIDACIJA ---

    // Ime
    if (form.name.trim() === "") {
      newErrors.name = "Name is required ❌";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters ❌";
    }

    // Email
    if (form.email.trim() === "") {
      newErrors.email = "Email is required ❌";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email must contain @ ❌";
    }

    // Password
    if (form.password.trim() === "") {
      newErrors.password = "Password is required ❌";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters ❌";
    }

    setErrors(newErrors);
  };

  return (
    <div className="container">
      <h1>React Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter yout name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* EMAIL */}
        <label>Email:</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* PASSWORD */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
