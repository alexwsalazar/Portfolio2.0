import React from "react";
import {Link} from "react-router-dom";
import "./component.css"

function Nav() {
  return (
    <div className="card text-center">
     <ul>
         <li>
            <Link to="./"> Home </Link>
         </li>
         <li>
            <Link to="./about"> About </Link>
         </li>
         <li>
            <Link to="./project"> Project </Link>
         </li>
         <li>
            <Link to="./contact"> Contact </Link>
         </li>
     </ul>
    </div>
  );
}

export default Nav;