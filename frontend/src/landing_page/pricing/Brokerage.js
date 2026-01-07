import React from 'react';

function Brokerage() {
    return ( 
        <div class="container mt-4">

 
  <ul class="nav nav-tabs pricing-tabs" id="pricingTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#equity" type="button">
        Equity
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" data-bs-toggle="tab" data-bs-target="#currency" type="button">
        Currency
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" data-bs-toggle="tab" data-bs-target="#commodity" type="button">
        Commodity
      </button>
    </li>
  </ul>

  
  <div class="tab-content border border-top-0 p-5">

    
    <div class="tab-pane fade show active " id="equity">
      <table class="table">
        <thead className='p-5'>
          <tr>
            <th></th>
            <th>Equity Delivery</th>
            <th>Equity Intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr className='p-5'>
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed<br></br> order whichever is lower</td>
            <td>0.03% or ₹20</td>
            <td>Flat ₹20</td>
          </tr>
          <tr className='p-5'>
            <td>STT/CTT	</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td><ul>
                    <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                    <li>0.1% on sell side (on premium)</li>
                </ul></td>
          </tr>
          <tr className='p-5'>
           <td>Transaction<br></br>charges</td>
            <td>NSE: 0.00297%<br></br>BSE: 0.00375%</td>
            <td>NSE: 0.00297%<br></br>BSE: 0.00375%</td>
            <td>NSE: 0.00173%<br></br>BSE: 0</td>
            <td>NSE: 0.03503% (on premium)<br></br>BSE: 0.0325% (on premium)</td>
            </tr>
            <tr className='p-5'>
            <td>GST</td>
            <td>18% on (brokerage + SEBI<br></br> charges + transaction<br></br> charges)</td>
            <td>18% on (brokerage + SEBI<br></br> charges + transaction<br></br> charges)</td>
            <td>18% on (brokerage + SEBI<br></br> charges + transaction<br></br> charges)</td>
            <td>18% on (brokerage + SEBI<br></br> charges + transaction<br></br> charges)</td>
        </tr>        
        </tbody>
        <tbody className='p-5'>
        <tr>
            <td>SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
        </tbody >
        <tbody className='p-5'>
        <tr>
            <td>Stamp charges</td>
            <td>0.015% or ₹1500 / crore on<br></br> buy side</td>
            <td>0.003% or ₹300 / crore on<br></br> buy side</td>
            <td>0.002% or ₹200 / crore on<br></br> buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
        </tr>
        </tbody>
      </table>
    </div>

    
    <div class="tab-pane fade" id="currency">

      <table class="table">
        <thead className='p-5'>
          <tr>
            <th>Currency futures</th>
            <th>Currency options</th>
          </tr>
        </thead>
        <tbody className='p-5'>
            <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00035%<br></br>BSE: 0.00045%</td>
                <td>NSE: 0.0311%<br></br>BSE: 0.001%</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
        </tbody>



        </table>
    </div>

   
    <div class="tab-pane fade" id="commodity">
      <table class="table">
        <thead className='p-5'>
          <tr>
            <th></th>
            <th>Commodity futures</th>
            <th>Commodity options</th>
          </tr>
        </thead>
        <tbody className='p-5'>
            <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>Transaction charges</td>
                <td>MCX: 0.0021%<br></br>NSE: 0.0001%</td>
                <td>MCX: 0.0418%<br></br>NSE: 0.001%</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>SEBI charges</td>
                <td><p>	Agri:</p><br></br>
                        ₹1 / crore
                    <p>Non-agri:</p>
                        ₹10 / crore
                </td>
                <td>₹10 / crore</td>
            </tr>
        </tbody>

        <tbody className='p-5'>
            <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
        </tbody>



        </table>
    </div>
  </div>
  <h1 className='fs-4 text-small text-muted text-center mt-3'><a href='' style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h1>
</div>
     );
}

export default Brokerage;