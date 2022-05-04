import React from "react";
import {Link} from "react-router-dom";
import "./component.css"

function Nav() {
  return (
    <div className="card text-center">
     <ul>
         <li>
            <Link to="/"> Home </Link>
         </li>
         <li>
            <Link to="/About"> About </Link>
         </li>
         <li>
            <Link to="/Project"> Project </Link>
         </li>
         <li>
            <Link to="/Contact"> Contact </Link>
         </li>
     </ul>
    </div>
  );
}

export default Nav;