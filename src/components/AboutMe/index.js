import "./about-me.css";
import primoPhone from "./about-me-img.jpg";

function AboutMe() {
  return(
    <div id="page-outer-div">
      <div id="about-me">
        <div id="img-holder">
          <img src={primoPhone} alt="primo gill portrait" />
        </div>
          <p id="about-me-text">
            I am a recent graduate from both Fullstack Academy’s web development program, and CCNY, where I completed a bachelor's degree in Jewish Studies, and a focus in graphic design. I’m a dual citizen who’s moved back and fourth between the Netherlands and the United States throughout my life, and am currently residing in the Netherlands.
            <br></br>
            <br></br>
            Next to web development I have a passion for graphic design and making music. 
          </p>
      </div>
    </div>
  );
}

export default AboutMe;
