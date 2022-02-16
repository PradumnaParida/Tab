import { useState } from "react";
import "./Tabss.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Personal
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Education
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div id="main">
            <div className="labl">
              <h1 className="lef">Name:</h1>
            </div>
            <div className="inp">
              <input className="ip1" placeholder="Enter your name"></input>
            </div>
          </div>

          <div id="main">
            <div className="labl">
              <h1 className="lef">Email:</h1>
            </div>
            <div className="inp">
              <input className="ip1" placeholder="Enter your Email"></input>
            </div>
          </div>

          <div id="main">
            <div className="labl">
              <h1 className="lef">Mobile Number:</h1>
            </div>
            <div className="inp">
              <input className="ip1" placeholder="Enter your number"></input>
            </div>
          </div>

          <button className="bt">Save</button>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div id="main">
            <div className="labl">
              <h1 className="lef">Qualification:</h1>
            </div>
            <div className="inp">
              <input
                className="ip1"
                placeholder="Enter your highest degree"
              ></input>
            </div>
          </div>

          <div id="main">
            <div className="labl">
              <h1 className="lef">Percentage:</h1>
            </div>
            <div className="inp">
              <input
                className="ip1"
                placeholder="Enter your Percentage"
              ></input>
            </div>
          </div>

          <div id="main">
            <div className="labl">
              <h1 className="lef">Password:</h1>
            </div>
            <div className="inp">
              <input
                className="ip1"
                placeholder="Enter your password "
                type={"password"}
              ></input>
            </div>
          </div>

          <button type="submit" className="bt">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
