import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
    if (phone.length !== 10) {
      toast.error("Enter valid 10 digit phone number");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/api/auth/signup",
        { phone, password },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Account created successfully");
        setTimeout(() => {
       window.location.href = "http://localhost:3001";   // keep http for dashboard
        }, 800);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Signup failed");
    }
  };

    return ( 
        <>
            <div className='container p-5'>
                <h1 className='text-center fs-3 mt-5'>Open a free demat and trading account online</h1>
                <h4 className='text-center text-muted mt-3'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
                <div className='row'>
                    <div className='col-6 p-5'>
                    <img src='media/images/account_open.svg' className='mt-3'/>
                    </div>
                    <div className='col-6 p-5'>
                    <h3 className='mt-3'>Signup now</h3>
                    <h6 className='text-muted mb-3'>Or track your existing application</h6>
                    <input
                    style={{ width: "75%", height: "15%" }}
                    className="text-center fs-3"
                    placeholder="+91"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    /><br></br>

                    <input
                    type="password"
                    placeholder="Set password"
                    className="form-control mt-3"
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="button" class="btn btn-primary mt-3" style={{width:"50%",height:"15%"}} onClick={handleSignup} >Signup</button>
                    <p className='mt-3'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                    <hr></hr>
                    <p>Looking to open NRI account? Click here</p>
                    </div>
                    <h1 className='text-center fs-3 mt-5'>Investment options with Zerodha demat account</h1>
                    <img src='media/images/Screenshot 2025-12-24 005608.png'/>
                    <button className='p-3 btn btn-primary fs-5 mb-5' 
                style={{width:"20%",margin:"0 auto"}}>Explore investments</button>
                </div>
            </div>
        </>
     );
}

export default Signup;