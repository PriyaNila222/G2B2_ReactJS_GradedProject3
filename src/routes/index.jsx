import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Routing,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import SingleMovie from "../pages/SingleMovie";

const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/:title" element={<SingleMovie />}/>
      </Routing>
    </Router>
  );
};

export default Routes;
