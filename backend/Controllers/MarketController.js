import axios from "axios";

export const getQuote = async (req, res) => {
  try {
    const symbol = req.params.symbol.replace("NSE:", "");

    const tvSymbol = `NSE:${symbol}`;

    const url = `https://scanner.tradingview.com/india/scan`;

    const payload = {
      symbols: { tickers: [tvSymbol], query: { types: [] } },
      columns: ["close", "change", "change_abs"]
    };

    const r = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });

    const d = r.data.data[0].d;

    res.json({
      c: d[0],      // price
      dp: d[1]      // %
    });
  } catch (e) {
    console.error("TradingView API crash:", e.message);
    res.status(500).json({ error: "TradingView API Error" });
  }
};
