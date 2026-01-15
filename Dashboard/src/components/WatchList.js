import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";
import { VerticalGraph } from "./VerticalGraph";

const WatchList = () => {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: "Live Allocation",
      data: [],
      backgroundColor: [
        "#ff6384", "#36a2eb", "#ffcd56",
        "#4bc0c0", "#9966ff", "#ff9f40"
      ],
      borderWidth: 1
    }]
  });

  const [barData, setBarData] = useState({
    labels: [],
    datasets: [{
      label: "Live P&L %",
      data: [],
      backgroundColor: []
    }]
  });

  // Doughnut updater
  useEffect(() => {
    window.updateChart = (symbol, price) => {
      setChartData(prev => {
        const i = prev.labels.indexOf(symbol);
        if (i !== -1) {
          const d = [...prev.datasets[0].data];
          d[i] = price;
          return { ...prev, datasets: [{ ...prev.datasets[0], data: d }] };
        }
        return {
          labels: [...prev.labels, symbol],
          datasets: [{ ...prev.datasets[0], data: [...prev.datasets[0].data, price] }]
        };
      });
    };
  }, []);

  // Bar updater
  useEffect(() => {
    window.updateBar = (symbol, percent) => {
      setBarData(prev => {
        const i = prev.labels.indexOf(symbol);
        if (i !== -1) {
          const d = [...prev.datasets[0].data];
          const c = [...prev.datasets[0].backgroundColor];
          d[i] = percent;
          c[i] = percent >= 0 ? "#2ecc71" : "#e74c3c";
          return { ...prev, datasets: [{ ...prev.datasets[0], data: d, backgroundColor: c }] };
        }
        return {
          labels: [...prev.labels, symbol],
          datasets: [{
            label: "Live P&L %",
            data: [...prev.datasets[0].data, percent],
            backgroundColor: [...prev.datasets[0].backgroundColor, percent >= 0 ? "#2ecc71" : "#e74c3c"]
          }]
        };
      });
    };
  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx" className="search" />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, i) => (
          <WatchListItem stock={stock} index={i} key={i} />
        ))}
      </ul>

      <DoughnutChart data={chartData} />
      <VerticalGraph data={barData} />
    </div>
  );
};

export default WatchList;

/* ---------------- WatchList Item ---------------- */

const WatchListItem = ({ stock, index }) => {
  const [live, setLive] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/market/quote/${stock.symbol}`);
        const data = await res.json();
        setLive(data);
        window.updateChart(stock.symbol, data.c);
        window.updateBar(stock.symbol, data.dp);
      } catch {}
    };

    const timeout = setTimeout(load, index * 1500);
    const refresh = setInterval(load, 10000);
    return () => { clearTimeout(timeout); clearInterval(refresh); };
  }, [stock.symbol, index]);

  if (!live || live.c == null) return <li>Loading {stock.symbol}...</li>;

  const isDown = live.dp < 0;

  return (
    <li>
      <div className="item">
        <p className={isDown ? "down" : "up"}>{stock.symbol}</p>
        <div className="itemInfo">
          <span className="percent">{live.dp?.toFixed(2) ?? "--"}%</span>
          {isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price">₹ {live.c?.toFixed(2) ?? "--"}</span>
        </div>
      </div>
      <WatchListActions uid={stock.symbol} />
    </li>
  );
};

/* ---------------- WatchList Actions ---------------- */

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={() => openSellWindow(uid)}>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><BarChartOutlined className="icon" /></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><MoreHoriz className="icon" /></button>
      </Tooltip>
    </span>
  );
};
