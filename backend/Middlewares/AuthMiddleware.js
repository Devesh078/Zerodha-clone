import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (user) {
      return res.json({ status: true, user: user.phone });
    } else {
      return res.json({ status: false });
    }
  } catch (error) {
    return res.json({ status: false });
  }
};
