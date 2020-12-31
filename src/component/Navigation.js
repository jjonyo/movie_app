import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return (
        <span className="Navigation">
            <Link to='/' className="Nav_home">Home</Link>
            <Link to='/about' className="Nav_about">About</Link>
        </span>
    )
}

export default Navigation;