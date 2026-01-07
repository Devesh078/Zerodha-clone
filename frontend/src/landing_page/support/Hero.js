import React from 'react';

function Hero() {
    return ( 
        <>
            <div class="container my-5">
  <div class="row g-4">

    
    <div class="col-lg-8">
      <div class="accordion" id="supportAccordion">

         
        <div class="accordion-item mb-3 border rounded">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed d-flex gap-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#acc1">
              <i class="bi bi-plus-circle text-primary fs-5"></i>
              <span class="fw-semibold">Account Opening</span>
            </button>
          </h2>
          <div id="acc1" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#" style={{textDecoration:"none"}}>Resident individual</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Minor</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Glossary</a></li>
              </ul>
            </div>
          </div>
        </div>

      
        <div class="accordion-item mb-3 border rounded">
          <button class="accordion-button collapsed d-flex gap-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc2">
            <i class="bi bi-person-circle text-primary fs-5"></i>
            <span class="fw-semibold">Your Zerodha Account</span>
          </button>
          <div id="acc2" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#"style={{textDecoration:"none"}}>Your Profile</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Account modification</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Nomination</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Transfer and conversion of securities</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3 border rounded">
          <button class="accordion-button collapsed d-flex gap-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc3">
            <i class="bi bi-person-circle text-primary fs-5"></i>
            <span class="fw-semibold">Kite</span>
          </button>
          <div id="acc3" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#"style={{textDecoration:"none"}}>IPO</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Trading FAQ</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins (DP)</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Alerts and Nuages</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>General</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3 border rounded">
          <button class="accordion-button collapsed d-flex gap-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc4">
            <i class="bi bi-person-circle text-primary fs-5"></i>
            <span class="fw-semibold">Funds</span>
          </button>
          <div id="acc4" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#"style={{textDecoration:"none"}}>Add money</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Withdraw money</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Add bank accounts</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>eMandates</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div class="accordion-item mb-3 border rounded">
          <button class="accordion-button collapsed d-flex gap-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc5">
            <i class="bi bi-person-circle text-primary fs-5"></i>
            <span class="fw-semibold">Console</span>
          </button>
          <div id="acc5" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#"style={{textDecoration:"none"}}>Portfolio</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Corporate actions</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Funds statement</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Reports</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Profile</a></li>
                <li><a href="#" style={{textDecoration:"none"}}>Segments</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        

        <div class="accordion-item mb-3 border rounded">
          <button class="accordion-button collapsed d-flex gap-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc6">
            <i class="bi bi-person-circle text-primary fs-5"></i>
            <span class="fw-semibold">Coin</span>
          </button>
          <div id="acc6" class="accordion-collapse collapse">
            <div class="accordion-body ps-5">
              <ul>
                <li><a href="#" style={{textDecoration:"none"}}>Mutual funds</a></li>
                <li><a href="#" style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Features on Coin</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>Payments and Orders</a></li>
                <li><a href="#"style={{textDecoration:"none"}}>General</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    
    <div class="col-lg-4">

      
      <div class="p-3 mb-4 border-sstart border-4 border-warning bg-warning-subtle">
        <ul class="mb-0">
          <li><a href="#"style={{textDecoration:"none"}}>BSE StAR mutual fund platform downtime</a></li>
          <li><a href="#"style={{textDecoration:"none"}}>Adjustment of F&O contracts of NUVAMA on account of Split</a></li>
        </ul>
      </div>

    
      <div class="border rounded">
        <div class="p-3 fw-semibold border-bottom">Quick links</div>
        <ol class="list-group list-group-numbered list-group-flush">
          <li class="list-group-item"><a href="#"style={{textDecoration:"none"}}>Track account opening</a></li>
          <li class="list-group-item"><a href="#"style={{textDecoration:"none"}}>Track segment activation</a></li>
          <li class="list-group-item"><a href="#"style={{textDecoration:"none"}}>Intraday margins</a></li>
          <li class="list-group-item"><a href="#"style={{textDecoration:"none"}}>Kite user manual</a></li>
          <li class="list-group-item"><a href="#"style={{textDecoration:"none"}}>Learn how to create a ticket</a></li>
        </ol>
      </div>

    </div>
  </div>
</div>

        </>
     );
}

export default Hero;