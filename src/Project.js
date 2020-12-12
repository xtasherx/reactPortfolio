import React from "react";

const Project = (props) => {
    return (
        <div>
        <div className=" u-flex">
            {props.dataOne.map((proj,i)=>(
                <div className="card bg-dark m-1"  id ="cardA" style={{"width": "350px", "height": "300px"}}>
                <div className="card-image" id ="cardB"><img src={proj.imgUrl} style={{"width": "350px", "height": "300px"}} alt="project"></img></div>
                <div className="title-container">
                <a  href={proj.siteUrl} target="_blank" rel="noreferrer"><p className="title hover-grow uppercase text-primary">{proj.title}</p></a>
                <a href={proj.github} target="_blank" rel="noreferrer"><span className="subtitle hover-grow">View on <i className="fab text-primary fa-github"></i></span></a>
                </div>
                </div>
            ))}
        </div> 
        <div className=" u-flex">
            {props.dataTwo.map((proj,i)=>(
                <div className="card bg-dark m-1" id ="cardA" style={{"width": "350px", "height": "300px"}}>
                <div className="card-image" id ="cardB"><img src={proj.imgUrl} style={{"width": "350px", "height": "300px"}} alt="project"></img></div>
                <div className="title-container">
                <a href={proj.siteUrl} target="_blank" rel="noreferrer"><p className="title hover-grow uppercase text-primary">{proj.title}</p></a>
                <a href={proj.github} target="_blank" rel="noreferrer"><span className="subtitle hover-grow">View on <i className="fab text-primary fa-github"></i></span></a>
                </div>
                </div>
            ))}
        </div> 

        </div>

    
    )
}

export default Project;