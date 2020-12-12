import React from "react";
import Footer from "./Footer";


const ContactMe = () => {
    return (
        <div>
                    <div className="hero fullscreen u-position-relative hero-img">
         
            <div className="hero-body u-flex u-flex-column u-justify-center u-text-center">
            <div>
            <h1 className="title text-light">Say hello.</h1>
            <div className=" ignore-screen level-item text-primary"><p className="m-0">Name:</p></div>
            <div className="ignore-screen level-item "><input type="name" value=""></input> </div>


            <div className=" ignore-screen level-item text-primary"><p className="m-0">Email:</p></div>
            <div className="ignore-screen level-item"><input type="email" value=""></input></div>

            <div className=" ignore-screen level-item text-primary"><p className="m-0">Message:</p></div>
            <textarea></textarea>
            <input type="submit" class="btn-primary pull-right"/>
            </div>


            </div>
            </div>
            <Footer />
        </div>



    )
}


export default ContactMe;