import React from "react";
import "./Filtercomponent.css";
import FiltersData from "../FiltersData";

const RenderFilter = () => {
   return (
      <div className="wrap">
         <Filtercheckbox data={FiltersData.price} />
         <Filtercheckbox data={FiltersData.session} />
      </div>
   );
};

// ------- checkbox component-----
function Filtercheckbox(props) {
   const datas = props.data;
   return (
      <div classNameName="filter_container">
         <h5 className="filter_heading">{datas.name}</h5>

         <ul className="chekbox-ul">
            {datas.checkboxes.map((checkbox) => {
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
   );
}
export default RenderFilter;
