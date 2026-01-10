import User from "../Models/UserModel.js";
import { createSecretToken } from "../util/SecretToken.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const existingUser = await User.findOne({ phone });

    // EXISTING USER → AUTO LOGIN
    if (existingUser) {
      const auth = await bcrypt.compare(password, existingUser.password);
      if (!auth) return res.json({ success: false, message: "Incorrect password" });

      const token = createSecretToken(existingUser._id);
      res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

      return res.json({ success: true, mode: "login", message: "Welcome back!" });
    }

    // NEW USER → CREATE ACCOUNT
    const user = await User.create({ phone, password });

    const token = createSecretToken(user._id);
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    return res.json({ success: true, mode: "signup", message: "Account created successfully" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};



/* NORMAL LOGIN */
export const Login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) return res.json({ success: false, message: "Incorrect phone or password" });

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.json({ success: false, message: "Incorrect phone or password" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });

    return res.json({ success: true, message: "User logged in successfully" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
