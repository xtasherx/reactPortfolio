import React from "react";
import Footer from "./Footer";

const Hero = () => {
    return (
        <div>
        <div className="hero fullscreen u-position-relative hero-img">
     
        <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
        <div className="mx-auto">
            <h1 className="title uppercase text-light headline-4 animated bounce gradientText">Natasha Harrington</h1>
            <h3 className="subtitle text-primary font-alt ">Full Stack Web Developer</h3></div>
            <a className="m-1 text-primary uppercase hover-grow" href="#/work"><button className="btn-dark hover-grow">See My Work <i class="fas fa-code animated pulse text-primary"></i></button></a>
            
        </div>
        </div>
        <Footer />
        </div>

    )
}

export default Hero;