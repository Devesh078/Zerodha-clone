import express from "express";
import { Signup, Login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.get("/", userVerification);
router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

export default router;
