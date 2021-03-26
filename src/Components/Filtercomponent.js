import React from "react";
import "./Filtercomponent.css";
import FiltersData from "../FiltersData";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
const RenderFilter = () => {
   return (
      <div className="wrap">
         <div className="wrap-inside">
            <SearchChoice data={FiltersData.expertise} />
            <SearchChoice data={FiltersData.focusarea} />
            <Filtercheckbox data={FiltersData.price} />
            <Filtercheckbox data={FiltersData.session} />
         </div>
      </div>
   );
};

// searchchioce componenet
const SearchChoice = (props) => {
   const datas = props.data;
   return (
      <div classNameName="filter_container">
         <h5 className="filter_heading">{datas.name}</h5>
         <div className="sidebar-searchContainer">
            {datas.inside_searchbox.map((searchbox) => {
               return (
                  <div className="searchbox-inside">
                     {searchbox.label} <CloseIcon style={{ color: "white" }} />
                  </div>
               );
            })}

            <input type="text" className="form-control" name="" />
            <SearchIcon style={{ color: "#26aa5a" }} />
         </div>
         {datas.outside_searchbox.map((searchbox) => {
            return (
               <div className="searchbox-outside">
                  {searchbox.label} <CloseIcon style={{ color: "white" }} />
               </div>
            );
         })}
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
