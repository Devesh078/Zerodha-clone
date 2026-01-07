import User from "../Models/UserModel.js";
import { createSecretToken } from "../util/SecretToken.js";
import bcrypt from "bcryptjs";

//Signup
export const Signup = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const user = await User.create({ phone, password });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax"
    });

    res.json({ success: true, message: "Account created successfully" });

  } catch (err) {
  console.log("SIGNUP ERROR FULL:", err);
  res.status(400).json({ success:false, message: err.message });
}
};


// Login
export const Login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return res.json({ message: "Incorrect phone or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect phone or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax"
    });





    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: { id: user._id, phone: user.phone },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
