import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import { Avatar } from "@material-ui/core";

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
                        Find Experts
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
               <NotificationsNoneIcon />
               <ChatBubbleOutlineIcon />
               <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
         </nav>
      </div>
   );
}
