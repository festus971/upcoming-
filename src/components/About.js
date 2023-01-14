import React from "react";
import Home from "./Home";

function About({bio, links}) {
    return (
    <div>
        <h2>About me</h2>
        {bio && bio.lenght >1 ? <p>{bio}</p> : null}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />"
        <Home github={links.github} linkden={links.linkden}/>
        
    </div>
    )
}
export default About;