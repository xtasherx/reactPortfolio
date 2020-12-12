import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
       
        <div className="header mb-0 u-position-absolute header-clear">
            <div className="header-brand"> 
            </div>
            <div className="header-nav">
                <div className="nav-center">
                <NavLink className="m-1 text-primary uppercase hover-grow"  to="/">Home</NavLink>
                <NavLink className="m-1 text-primary uppercase hover-grow"  to="/#/about">About Me</NavLink>
                <NavLink className="m-1 text-primary uppercase hover-grow"  to="/#/contactme">Contact Me</NavLink>
                <NavLink className="m-1 text-primary uppercase hover-grow"  to="/#/work">My Work</NavLink>
            </div>
            </div>
        </div>




    )

}



export default Header;