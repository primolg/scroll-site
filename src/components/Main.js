import { useState } from "react";
import AboutMe from "./AboutMe/index.js";
import Contact from "./Contact/index.js";
import Resume from "./Resume/index.js";

function Main() {

    const [currentCat, setCurrentCat] = useState(undefined);
    if (!currentCat){
        setCurrentCat("about-me")
    }
    
  return(
    <div className="main">
        <div id="cat-buttons" >
            <div className="cat-button about-me-clrs" onClick={()=>{setCurrentCat("about-me")}}>about me</div>
            <div className="cat-button projects-clrs" onClick={()=>{setCurrentCat("projects")}}>projects</div>
            <div className="cat-button contact-clrs" onClick={()=>{setCurrentCat("contact")}}>contact</div>
            <div className="cat-button resume-clrs" onClick={()=>{setCurrentCat("resume")}}>resume</div>
        </div>
        <div id="text-box" className={currentCat ? (currentCat + "-clrs") : ""}>
            {currentCat === "about-me" ?
            <AboutMe /> :
             currentCat === "projects" ?
            "projects" :
            currentCat === "resume" ?
            <Resume /> :
            currentCat === "contact" ?
            <Contact /> :
            ""
            }
        </div>
    </div>
  );
}

export default Main;