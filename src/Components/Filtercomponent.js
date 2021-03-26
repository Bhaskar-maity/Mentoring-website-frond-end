import React from "react";
import "./Filtercomponent.css";
import FiltersData from "../FiltersData";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
const RenderFilter = () => {
   return (
      <div className="wrap">
         <h2>Filters</h2>
         <div className="wrap-inside">
            <SearchChoice data={FiltersData.expertise} />
            <SearchChoice data={FiltersData.focusarea} />
            <RatingComponent />
            <Filtercheckbox data={FiltersData.price} />
            <Filtercheckbox data={FiltersData.session} />
         </div>
      </div>
   );
};

// ----------------rating component start
const RatingComponent = () => {
   return (
      <div className="">
         <h5 className="filter_heading">RATINGS</h5>
         <ul className="chekbox-ul">
            <li className="star-list">
               <input
                  type="checkbox"
                  id="hh"
                  name="vehicle1"
                  value="Bike"
               ></input>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
            </li>
            <li className="star-list">
               <input
                  type="checkbox"
                  id="hh"
                  name="vehicle1"
                  value="Bike"
               ></input>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
            </li>
         </ul>
         <ul className="chekbox-ul">
            <li className="star-list">
               <input
                  type="checkbox"
                  id="hh"
                  name="vehicle1"
                  value="Bike"
               ></input>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
            </li>
            <li className="star-list">
               <input
                  type="checkbox"
                  id="hh"
                  name="vehicle1"
                  value="Bike"
               ></input>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
            </li>
         </ul>
      </div>
   );
};
//--------------------------------rating component end

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
