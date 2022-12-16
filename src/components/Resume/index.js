import "./resume.css";
import { BiDownload } from 'react-icons/bi'
import 'react-toastify/dist/ReactToastify.css';
import pdf from './primo-gill-resume.pdf'
import resumeImg from './primo-gill-resume.png'
import { useState } from "react";

function Resume() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="resume">
          <a id="download-div" href={pdf} download="primo-gill-resume.pdf">
            <BiDownload />
            <>download</>
          </a>
        <img id="resume-img" src={resumeImg} alt="primo gill resume" />
      </div>
    </div>
  );
}

export default Resume;
