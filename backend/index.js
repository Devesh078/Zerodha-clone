import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import marketRoutes from "./Routes/MarketRoute.js";

import authRoutes from "./Routes/AuthRoute.js";
import { HoldingsModel } from "./Models/HoldingsModel.js";
import { PositionsModel } from "./Models/PositionsModel.js";
import { OrdersModel } from "./Models/OrdersModel.js";

dotenv.config();

const app = express();              // ✅ MUST BE FIRST
const PORT = 3002;

/* MIDDLEWARES */
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/market", marketRoutes);


/* EXISTING APIs */
app.get("/allHoldings", async (req, res) => res.json(await HoldingsModel.find()));
app.get("/allPositions", async (req, res) => res.json(await PositionsModel.find()));
app.post("/newOrder", async (req, res) => {
  await new OrdersModel(req.body).save();
  res.send("Order saved!");
});

/* START SERVER */
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log("Backend running on http://localhost:3002"));
});
