import React from "react";
import RenderFilter from "./Filtercomponent";
import ExpertComponenet from "./ExpertComponenet";
import "./CombinedComponenet.css";
import GitHubIcon from "@material-ui/icons/GitHub";
export default function CombinedComponenet() {
   return (
      <div>
         <div className="whole">
            <RenderFilter />
            <ExpertComponenet />
         </div>
         <div className="footer">
            Developed by 💖Bhaskar maity
            <a target="_blank" href="https://github.com/Bhaskar-maity">
               <GitHubIcon />
            </a>
         </div>
      </div>
   );
}
