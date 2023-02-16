import { useState } from "react"
//components
import amsterdam from "./maps/amsterdam.png"
import london from "./maps/london.png"
import newYork from "./maps/newYork.png"
import paris from "./maps/paris.png"

function App() {

  const [city, setCity] = useState("amsterdam");
  const link = `https://www.google.com/search?q=${city}`;
  function scrollFunc(){
    const position = (document.querySelector("#scroll").scrollTop / document.querySelector("#scroll").clientHeight)
    if (position > 2.45){
      setCity("london");
    } else if (position >= 1.5){
      setCity("paris")
    } else if (position >= 0.55){
      setCity("newYork")
    } else {
      setCity("amsterdam")
    }
  }

  return(
    <div id="app">
      <div id="outer">
        <div id="scroll" onScroll={scrollFunc}>
          <div className="item">
            <img src={amsterdam} alt="amsterdam" />
          </div>
          <div className="item">
            <img src={newYork} alt="newYork" />
          </div>
          <div className="item">
            <img src={paris} alt="paris" />
          </div>
          <div className="item">
            <img src={london} alt="london" />
          </div>
        </div>
        <a className={city + " circle"} href={link}>
            <p id="name">{city}</p>
        </a>
      </div>
    </div>
  );
}

export default App;
