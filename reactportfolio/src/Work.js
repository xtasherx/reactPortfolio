import React from "react";
import Footer from "./Footer";
import Project from "./Project";

const dataOne = [{
    imgUrl: "https://picsum.photos/350/300",
    title: "Orange Weather",
    siteUrl: "https://xtasherx.github.io/weatherApp/",
    github: "https://github.com/xtasherx/weatherApp"
},
{
    imgUrl: "https://picsum.photos/350/300",
    title: "Day Planner",
    siteUrl: "https://xtasherx.github.io/dayPlanner/",
    github: "https://github.com/xtasherx/dayPlanner"
},
{
    imgUrl: "https://picsum.photos/350/300",
    title: "Rapsheet",
    siteUrl: "https://infinite-journey-37798.herokuapp.com/",
    github: "https://github.com/xtasherx/project2"
}
]

const dataTwo = [{
    imgUrl: "https://picsum.photos/350/300",
    title: "Dispatch Center",
    siteUrl: "http://dispatchcenter.net",
    github: "http://dispatchcenter.net"
},
{
    imgUrl: "https://picsum.photos/350/300",
    title: "README Generator",
    siteUrl: "https://github.com/xtasherx/READMEGenerator",
    github: "https://github.com/xtasherx/READMEGenerator"
},
{
    imgUrl: "https://picsum.photos/350/300",
    title: "Flying Dish",
    siteUrl: "https://xtasherx.github.io/recipeApp/",
    github: "https://github.com/xtasherx/recipeApp"
}
]




const Work = () => {
    return (
        <div>
            <div className="hero fullscreen u-position-relative hero-img">
        
            <div className="content my-5 mt-20">
                <Project dataOne = {dataOne} dataTwo={dataTwo}/>
              
            </div>
    
        </div>
        <Footer />
        </div>



    )
}


export default Work;