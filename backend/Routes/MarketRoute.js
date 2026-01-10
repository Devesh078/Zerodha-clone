import express from "express";
import { getQuote } from "../Controllers/MarketController.js";

const router = express.Router();

router.get("/quote/:symbol", getQuote);

export default router;
