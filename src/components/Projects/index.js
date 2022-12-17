import "./projects.css";
import { BiDownload } from 'react-icons/bi'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import NSshow from "./NSshow.png"
function Projects() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="projects">
        {/* NS MEETUP */}
          <div className="project">
            <div>
              <h3>NS Meetup</h3>
              <h4>public transit meetup app</h4>
            </div>
            <div>-uses third party API's to find trips and their related locations</div>
            <div>-developed using React, Axios, (Less) CSS, & other libraries</div>
            <div>
              app: <a href="https://nsmeetup.netlify.app/">https://nsmeetup.netlify.app </a>(mobile recommended)
            </div>
            <div>
              github: <a href="https://github.com/primolg/NS-meetup"> https://github.com/primolg/NS-meetup</a>
            </div>
            <img src={NSshow} alt="NS-Meetup app display" />
          </div>
        {/* BOOK BEASTS */}
          <div className="project">
            <div>
              <h3>Book Beasts</h3>
              <h4>content management/writing tool</h4>
            </div>
            <div>-application for students (aged 5-12) to write books, and instructors to manage and review their students' work</div>
            <div>-developed using React, Redux, PSQL, Axios, (Less) CSS, & other libraries</div>
            <div>-my responsibilities were developing the student portal & writing tool</div>
            <div>
              app: <a href="https://book-beasts.herokuapp.com/">https://book-beasts.herokuapp.com </a>
            </div>
            <div>
              github: <a href="https://github.com/primolg/Book-Beasts">https://github.com/primolg/Book-Beasts</a>
            </div>
          </div>
        {/* LoL Cards */}
        <div className="project">
            <div>
              <h3>LoL Cards</h3>
              <h4>e-commerce store</h4>
            </div>
            <div>-e-commerce store to buy league of legend cards (not a real product)</div>
            <div>-developed using React, Redux, PSQL, Axios, (Less) CSS, & other libraries</div>
            <div>-my responsibilities included developing cart/guest cart feature, styling, and project planning</div>
            <div>
              app: <a href="http://ecommercelolcards.herokuapp.com/">http://ecommercelolcards.herokuapp.com/ </a>
            </div>
            <div>
              github: <a href="https://github.com/primolg/League-of-Legends-Cards">https://github.com/primolg/League-of-Legends-Cards</a>
            </div>
          </div>
        {/* PORTFOLIO SITE */}
        <div className="project">
            <div>
              <h3>Portfolio site</h3>
            </div>
            <div>-developed using React, (Less) CSS, & other libraries</div>
            <div>
              github: <a href="https://github.com/primolg/portfolio-site">https://github.com/primolg/portfolio-site</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects;
