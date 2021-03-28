import React from "react";
import "./MainComponent.css";
import Navbar from "./Navbar";
import CombinedComponenet from "./CombinedComponenet";
import { Switch, Route } from "react-router-dom";

export default function MainComponent() {
   const dashboard = () => {
      return <h3> Dashboard component not yet fully developed </h3>;
   };
   const discussion = () => {
      return <h3> Discussion component not yet fully developed</h3>;
   };

   return (
      <div className="main-componenet">
         <Route path="/" component={Navbar} />
         <Switch>
            <Route path="/findexpert" component={CombinedComponenet} />
            <Route path="/dashboard" component={dashboard} />
            <Route path="/discussion" component={discussion} />
         </Switch>
      </div>
   );
}
