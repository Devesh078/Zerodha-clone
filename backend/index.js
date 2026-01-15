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
  origin: true,
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

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("MongoDB connected");

  const PORT = process.env.PORT || 10000;
  app.listen(PORT, () => console.log("Zerofy backend running on port", PORT));
});


import path from "path";

const __dirname = path.resolve();

// Serve frontend
app.use("/",
  express.static(path.join(__dirname, "../frontend/build"))
);

// Serve dashboard
app.use("/dashboard",
  express.static(path.join(__dirname, "../Dashboard/build"))
);

app.get(/.*/, (req, res) => {
  if (req.originalUrl.startsWith("/dashboard")) {
    res.sendFile(path.join(__dirname, "../Dashboard/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  }
});
