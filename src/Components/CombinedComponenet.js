import React from "react";
import RenderFilter from "./Filtercomponent";
import ExpertComponenet from "./ExpertComponenet";
import "./CombinedComponenet.css";
export default function CombinedComponenet() {
   return (
      <div className="whole">
         <RenderFilter />
         <ExpertComponenet />
      </div>
   );
}
