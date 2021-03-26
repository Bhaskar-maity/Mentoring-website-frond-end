import React from "react";
import "./Filtercomponent.css";
import FiltersData from "../FiltersData";
import SearchIcon from "@material-ui/icons/Search";
const RenderFilter = () => {
   return (
      <div className="wrap">
         <SearchChoice />
         <Filtercheckbox data={FiltersData.price} />
         <Filtercheckbox data={FiltersData.session} />
      </div>
   );
};

const SearchChoice = () => {
   return (
      <div classNameName="filter_container">
         <h5 className="filter_heading">Expertise</h5>
         <div className="sidebar-searchContainer">
            <input type="text" className="form-control" name="" />
            <SearchIcon color="#26aa5a" />
         </div>
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
