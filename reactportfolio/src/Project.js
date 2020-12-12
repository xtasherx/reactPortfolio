import React from "react";

const Project = (props) => {
    return (
        <div>
        <div className=" u-flex">
            {props.dataOne.map((proj,i)=>(
                <div className="card bg-dark m-1" style={{"width": "350px", "height": "300px"}}>
                <div className="card-image"><img src={proj.imgUrl} style={{"width": "350px", "height": "300px"}} alt="murray"></img></div>
                <div className="title-container">
                <a  href={proj.siteUrl} target="_blank" rel="noreferrer"><p className="title hover-grow uppercase">{proj.title}</p></a>
                <a href={proj.github} target="_blank" rel="noreferrer"><span className="subtitle hover-grow">View on Github</span></a>
                </div>
                </div>
            ))}
        </div> 
        <div className=" u-flex">
            {props.dataTwo.map((proj,i)=>(
                <div className="card bg-dark m-1" style={{"width": "350px", "height": "300px"}}>
                <div className="card-image" style={{"width": "350px", "height": "300px"}}><img src={proj.imgUrl} alt="murray"></img></div>
                <div className="title-container">
                <a href={proj.siteUrl} target="_blank" rel="noreferrer"><p className="title hover-grow uppercase">{proj.title}</p></a>
                <a href={proj.github} target="_blank" rel="noreferrer"><span className="subtitle hover-grow">View on Github</span></a>
                </div>
                </div>
            ))}
        </div> 

        </div>

    
    )
}

export default Project;