import { Avatar } from "@material-ui/core";
import React from "react";
import "./ExpertComponenet.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimerIcon from "@material-ui/icons/Timer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TitleIcon from "@material-ui/icons/Title";
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

            <div className="second">
               <div className="heading">
                  <div className="name">
                     <h1>Daavid Melvik</h1>
                     <h5> Founder @ The Milenials</h5>
                  </div>
                  <div className="view-profile">
                     <FavoriteBorderIcon />
                     <button>View Profile</button>
                  </div>
               </div>
               <div className="offer">
                  <h5>
                     <TimerIcon /> 02 Free lessons
                  </h5>
                  <h5>
                     <LocationOnIcon />
                     Tampa ,Usa
                  </h5>
                  <h5>
                     <TitleIcon />
                     Greek , Eng, French
                  </h5>
               </div>
               <div className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus dignissimos dolorem alias obcaecati consectetur
                  consequatur, repellat ab architecto vero sapiente.
               </div>
               <div className="specification">
                  <button className="button">Marketing</button>
                  <button className="button">Marketing</button>
                  <button className="button">Marketing</button>
               </div>
            </div>
         </div>
      </div>
   );
}
