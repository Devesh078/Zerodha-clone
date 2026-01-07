import React from 'react';

function Charges() {
    return ( 
        <>
    
    <div class="container my-5 ">
    <h1 className='fs-4 mb-4 '>Charges for account opening</h1>
    <div class="border rounded">
    <table class="table mb-0">
      <thead class="border-bottom">
        <tr>
          <th class="px-4 fw-normal">Type of account</th>
          <th class="px-4 text-end fw-normal">Charges</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="px-4">Online account</td>
          <td class="px-4 text-end">
            <span class="badge bg-success">FREE</span>
          </td>
        </tr>

        <tr>
          <td class="px-4">Offline account</td>
          <td class="px-4 text-end">
            <span class="badge bg-success">FREE</span>
          </td>
        </tr>

        <tr>
          <td class="px-4">NRI account (offline only)</td>
          <td class="px-4 text-end">₹ 500</td>
        </tr>

        <tr>
          <td class="px-4">
            Partnership, LLP, HUF, or Corporate accounts (offline only)
          </td>
          <td class="px-4 text-end ">₹ 500</td>
        </tr>
      </tbody>
    </table>
  </div>


   <h1 className='fs-4 mb-4 mt-5'>Demat AMC (Annual Maintenance Charge)</h1>
    <div class="border rounded mt-5">
    <table class="table mb-0">
      <thead class="border-bottom">
        <tr>
          <th class="px-4 fw-normal">Value of holdings</th>
          <th class="px-4 text-end fw-normal">AMC</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="px-4">Up to ₹4 lakh</td>
          <td class="px-4 text-end">
            <span class="badge bg-success">FREE</span>
          </td>
        </tr>

        <tr>
          <td class="px-4">Offline account</td>
          <td class="px-4 text-end">
            <span class="badge bg-success">FREE</span>
          </td>
        </tr>

        <tr>
          <td class="px-4">₹4 lakh - ₹10 lakh</td>
          <td class="px-4 text-end">₹ 100 per year, charged quarterly*</td>
        </tr>

        <tr>
          <td class="px-4">
            Above ₹10 lakh
          </td>
          <td class="px-4 text-end">₹ 300 per year, charged quarterly</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className='fs-6 text-small mb-5'>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a style={{textDecoration:"none"}}>click here.</a></p>


  <h1 className='fs-4 mb-4 mt-5'>Charges for optional value added services</h1>
    <div class="border rounded">
    <table class="table mb-0">
      <thead class="border-bottom">
        <tr>
          <th class=" fw-normal">Service</th>
          <th class=" fw-normal">Billing Frquency</th>
          <th class="fw-normal">Charges</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td >Tickertape</td>
          <td >
            Monthly / Annual
          </td>
          <td>Free: 0 | Pro: 249/2399</td>
        </tr>

        <tr>
          <td>Smallcase</td>
          <td>
           Per transaction
          </td>
          <td>Buy & Invest More: 100 | SIP: 10</td>
        </tr>

        <tr>
          <td >Kite Connect</td>
          <td >Monthly</td>
          <td>Connect: 500 | Personal: Free</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        </>
     );
}

export default Charges;