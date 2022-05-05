import React from "react";
import {Link} from "react-router-dom";
import "./component.css"

function Nav() {
  return (
    <div className="card text-center">
     <ul>
         <li>
            <Link to="/Portfolio2.0/"> Home </Link>
         </li>
         <li>
            <Link to="/Portfolio2.0/about"> About </Link>
         </li>
         <li>
            <Link to="/Portfolio2.0/project"> Project </Link>
         </li>
         <li>
            <Link to="/Portfolio2.0/contact"> Contact </Link>
         </li>
     </ul>
    </div>
  );
}

export default Nav;