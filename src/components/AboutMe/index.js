import "./about-me.css";
import { useState } from "react";
import primoPhone from "./about-me-img.jpg";

function AboutMe() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="about-me">
        <div id="img-holder">
          <img src={primoPhone} alt="primo gill portrait" />
        </div>
          <p id="about-me-text">
            I am a recent graduate from both Fullstack Academy’s web development program, and CCNY, where I completed a bachelor's degree in Jewish Studies, with a focus in graphic design. I’m a dual citizen who’s moved back and fourth between the Netherlands and the United States throughout my life, and am currently residing in the Netherlands.
            <br></br>
                Next to web development I have a passion for graphic design and making music. 
          </p>
      </div>
    </div>
  );
}

export default AboutMe;
