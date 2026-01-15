import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      toast.error("Enter valid 10 digit phone number");
      return;
    }

    try {
      const { data } = await axios.post(
  "/api/auth/signup",
  { phone, password },
  { withCredentials: true }
);

     if (data.success) {
      toast.success(data.message);
        setTimeout(() => navigate("/dashboard"), 800);
      } else {
        toast.error(data.message);
      }
    }catch (err) {
  toast.error(err.response?.data?.message || "Signup failed");
}
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
