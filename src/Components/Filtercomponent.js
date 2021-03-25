import React from "react";
import "./Filtercomponent.css";

export default function Filtercomponent() {
   const data = {
      name: "price",
      checkboxes: [
         { id: 1, label: "This is my bike" },
         { id: 2, label: "This is my Pen" },
      ],
   };

   return (
      <div className="wrap">
         <div classNameName="filter_container">
            <h5 className="filter_heading">{data.name}</h5>

            <ul className="chekbox-ul">
               {data.checkboxes.map((checkbox) => {
                  return (
                     <li className="checkbox-list">
                        <input
                           type="checkbox"
                           id={checkbox.id}
                           name="vehicle1"
                           value="Bike"
                        ></input>
                        <label for="vehicle1"> {checkbox.label}</label>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
