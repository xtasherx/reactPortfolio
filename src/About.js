import React from "react";
import Footer from "./Footer";


const About = () => {
    return (
        <div>
                    <div className="hero fullscreen u-position-relative hero-img">
         
            <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
            <div className=" content u-text-center">
                
                <div className="row ">
                    <div className="col-3 level">
                        <img src="assets/my-avi.jpg" className="u-circle" alt="" ></img>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8">
                        <p className="u-text-left my-2 text-light">
                           <span className="font-bold text-primary bigText">Hi, I'm Tasha!</span> A full stack web developer based out of San Antonio, Tx. I'm a science-fiction lover, a gamer, a late-night baker, and a dog mom. 
                            I started coding as a hobby and fell in love. I love problem solving and learning new things. I have two years of experience with front end technologies and am currently 
                            enrolled in a full stack bootcamp through the University of Texas San Antonio to gain more experience with server-side technologies.
                        </p>
                    </div>
                </div>
                <div className="divider text-primary"></div>
                <h1 className="font-light text-light">Top Technologies</h1>
                <div className="row text-light">
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">HTML5 <i className="fab fa-html5"></i>                            
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">CSS3 <i className="fab fa-css3"></i>
                            </p>
                
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">JavaScript <i className="fab fa-js-square"></i>
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">MongoDb <i className="fab fa-mdb"></i>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row text-light">
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">Bootstrap <i className="fab fa-bootstrap"></i>
                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            

                            <p className="lead font-bold">Node.js <i className="fab fa-node-js"></i>

                            </p>

                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p className="lead font-bold">MySQL <i className="fas fa-database"></i>
         
                            </p>



                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            
                            <p className="lead font-bold">React <i className="fab fa-react"></i>

                            </p>

                        </div>
                    </div>
                </div>
                <div className="space xlarge"></div>
                <div className="">
                    <a href="assets/natasha-harrington-cv.pdf"><button className=" btn-primary btn-small hover-grow"><span className="text-light"></span>Download CV</button></a>
                    <a href="#/work"><button className=" btn-small hover-grow">See My Work</button></a>
                </div>
            </div>


            </div>
            </div>
            <Footer />
        </div>



    )
}


export default About;