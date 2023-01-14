import React from "react";
function Home({github, linkden}){

    return(
        <div>
            <h3> Links </h3>
            <a href ={github}>{github}</a>
            <a href={linkden}>{linkden}</a>
        </div>
    )
}
export default Home;