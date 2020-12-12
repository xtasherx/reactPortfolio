import React from "react";


const Header = () => {
    return (
       
        <div className="header mb-0 u-position-absolute header-clear">
            <div className="header-brand"> 
            </div>
            <div className="header-nav">
                <div className="nav-center">
                <a className="m-1 text-primary uppercase hover-grow"  href="/">Home</a>
                <a className="m-1 text-primary uppercase hover-grow"  href="/#/about">About Me</a>
                <a className="m-1 text-primary uppercase hover-grow"  href="/#/contactme">Contact Me</a>
                <a className="m-1 text-primary uppercase hover-grow"  href="/#/work">My Work</a>
            </div>
            </div>
        </div>




    )

}



export default Header;