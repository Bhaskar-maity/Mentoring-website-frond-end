import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
export default function Navbar() {
   return (
      <div>
         <nav className="nav">
            <div className="logo">
               <FiberManualRecordIcon style={{ color: "#26aa5a" }} />
               Logo
            </div>
            <div className="nav-item">
               <ul>
                  <li>
                     <NavLink to="/dashboard" activeClassName="is-active">
                        Dashboard
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/findexpert" activeClassName="is-active">
                        FindExpert
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/discussion" activeClassName="is-active">
                        Discussion
                     </NavLink>
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
