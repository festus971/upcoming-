import React from "react";


function NavBar() {
    const links = ["home", "about", "projects"];

    const one = links .map((link)=>(
        <a key={link} href ={"#" + link}>
            {link}
        </a>
    ));
    return <nav>{one}</nav>
    
}
export default NavBar;