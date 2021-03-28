import { Avatar } from "@material-ui/core";
import React from "react";
import "./ExpertComponenet.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimerIcon from "@material-ui/icons/Timer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TitleIcon from "@material-ui/icons/Title";
import Expertdata from "../Expertdata.json";

export default function ExpertComponenet() {
   return (
      <div className="wrapExpert">
         <div className="expertheader">
            <h2>Feature Experts</h2>
            <div className="options">
               <select>
                  <option value="actual value 1">Best Match</option>
                  <option value="actual value 1">Display Text 1</option>
                  <option value="actual value 2">Display Text 2</option>
                  <option value="actual value 3">Display Text 3</option>
               </select>
            </div>
         </div>

         {Expertdata.experts.map((expert) => {
            return (
               <div className="box">
                  <div className="first">
                     <Avatar className="profile-img" src={expert.profile_img} />
                     <h5>
                        Price: <span className="price-tag">FREE</span>
                     </h5>

                     <p>
                        <span class="fa fa-star checked"></span>{" "}
                        <span className="rating">4.9</span> (120)
                     </p>
                  </div>

                  <div className="second">
                     <div className="heading">
                        <div className="name">
                           <h1>{expert.name}</h1>
                           <h5> Founder {expert.company}</h5>
                        </div>
                        <div className="view-profile">
                           <FavoriteBorderIcon style={{ color: "coral" }} />
                           <button>View Profile</button>
                        </div>
                     </div>
                     <div className="offer">
                        {expert.offer_details.map((offer) => {
                           return (
                              <h5>
                                 <TimerIcon /> {offer}
                              </h5>
                           );
                        })}
                     </div>
                     <div className="para">{expert.para}</div>
                     <div className="specification">
                        {expert.specification.map((spec) => {
                           return <button className="button">{spec}</button>;
                        })}
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
