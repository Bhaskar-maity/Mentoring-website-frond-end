import React from "react";
import "./Navbar.css";
export default function Navbar() {
   return (
      <div>
         <nav className="nav">
            <div className="logo">Logo</div>
            <div className="nav-item">
               <ul>
                  <li>
                     <a href="#">DashBoard</a>
                  </li>
                  <li>
                     <a href="#">FindExpert</a>
                  </li>
                  <li>
                     <a href="#">Discussion</a>
                  </li>
               </ul>
            </div>
            <div className="profile">
               <h1>profile</h1>
            </div>
         </nav>
      </div>
   );
}
