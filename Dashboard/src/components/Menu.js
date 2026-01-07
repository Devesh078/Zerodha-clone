import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
      const [SelectedMenu, setSelectedMenu] = useState(0);
      const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


     
      const handleMenuClick = (index)=>{
          setSelectedMenu(index);
      }

      const handleProfileClick = (index)=>{
          setIsProfileDropdownOpen(!isProfileDropdownOpen);
      };

      const menuClass = "menu";
      const activeMenuClass = "menu selected";
  
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <u>
          <li>
            <Link style={{textDecoration:"none"}} to="/" 
            onClick={()=> handleMenuClick(0)}>
              <p className={SelectedMenu===0 ? activeMenuClass: menuClass}>Dashboard</p>
            </Link>
          </li>
         <li>
            <Link style={{textDecoration:"none"}} to="/orders" 
            onClick={()=> handleMenuClick(1)}>
              <p className={SelectedMenu===1 ? activeMenuClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" 
            onClick={()=> handleMenuClick(2)}>
              <p className={SelectedMenu===2 ? activeMenuClass: menuClass}
              >Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" 
            onClick={()=> handleMenuClick(3)}>
              <p className={SelectedMenu===3 ? activeMenuClass: menuClass}>Positions</p>
            </Link>
          </li>
            <li>
            <Link style={{textDecoration:"none"}} to="/funds" 
            onClick={()=> handleMenuClick(4)}>
              <p className={SelectedMenu===4 ? activeMenuClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" 
            onClick={()=> handleMenuClick(5)}>
              <p className={SelectedMenu===5 ? activeMenuClass: menuClass}>Apps</p>
            </Link>
          </li>
        </u>
        <hr/>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen
        }
       </div>
    </div>
  );
};

export default Menu;
