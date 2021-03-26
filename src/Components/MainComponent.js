import React from "react";
import "./MainComponent.css";
import Navbar from "./Navbar";
import CombinedComponenet from "./CombinedComponenet";
import { Switch, Route } from "react-router-dom";
export default function MainComponent() {
   const dashboard = () => {
      return <h1> Dashboard</h1>;
   };
   return (
      <div className="main-componenet">
         <Route path="/" component={Navbar} />
         <Switch>
            <Route path="/findexpert" component={CombinedComponenet} />
         </Switch>
      </div>
   );
}
