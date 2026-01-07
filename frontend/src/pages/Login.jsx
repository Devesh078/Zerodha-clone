import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    phone: "",
    password: "",
  });

  const { phone, password } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/auth/login",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
        <span>
          New user? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
