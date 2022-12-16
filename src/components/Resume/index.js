import "./resume.css";
import { BiDownload } from 'react-icons/bi'
import 'react-toastify/dist/ReactToastify.css';
import pdf from './primo-gill-resume.pdf'
import resumeImg from './primo-gill-resume.png'
import { Document, Page } from 'react-pdf';

function Resume() {

  return(
    <div id="page-outer-div">
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
