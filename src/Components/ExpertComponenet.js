import { Avatar } from "@material-ui/core";
import React from "react";
import "./ExpertComponenet.css";

export default function ExpertComponenet() {
   return (
      <div className="wrapExpert">
         <h2>Feature Experts</h2>

         <div className="box">
            <div className="first">
               <Avatar
                  className="profile-img"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               />
               <h5>
                  Price: <span>FREE</span>
               </h5>

               <p>
                  <span class="fa fa-star checked"></span> 4.9 (120)
               </p>
            </div>

            <div className="second"></div>
         </div>
      </div>
   );
}
