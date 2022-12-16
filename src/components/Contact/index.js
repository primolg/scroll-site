import "./contact.css";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlinePhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 100
        );
    }

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }
    const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
        copyTextToClipboard("+19144910993")
        .then(() => {
            toast.dark("phone number copied")
        })
        .catch((err) => {
            console.log(err);
            toast.error("could not copy")
        });
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="contact">
        <a href="https://www.linkedin.com/in/primo-ledeboer-gill/">
          <AiFillLinkedin />
          <>  linkedin.com/in/primo-ledeboer-gill</>
        </a>
        <br></br>
        <a href="https://github.com/primolg">
          <AiFillGithub />
          <>  github.com/primolg</>
        </a>
        <br></br>
        <a href="mailto: primoledeboergill@gmail.com">
          <MdEmail />
          <>  primoledeboergill@gmail.com</>
        </a>
        <br></br>
        <a onClick={handleCopyClick}>
          <ToastContainer toastStyle={{ backgroundColor: "#9F524F", color: "#DBD9D2"}} />
          <AiOutlinePhone />
          <>  +1 914 491 0993</>
        </a>
      </div>
    </div>
  );
}

export default Contact;
