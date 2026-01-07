import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { useState } from "react";

const BuyActionWindow = ({ uid }) => {

  const [StockQuantity,setStockQuantity]= useState(1);
  const [StockPrice, setStockPrice]= useState(0.0);


  const handleBuyClick = () => {
    axios.post('http://localhost:3002/newOrder',{
      name:uid,
      qty:StockQuantity,
      price:StockPrice,
      mode: "BUY",
    });
    GeneralContext.closeBuyWindow();
  };


  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" onChange={(e)=>setStockQuantity(e.target.value)}
            value={StockQuantity} />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price"step="0.05" onChange={(e)=>setStockPrice(e.target.value)} value={StockPrice}/>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleBuyClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
