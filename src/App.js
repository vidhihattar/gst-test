import { React, useState } from "react";

import List from "./Components/list";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [input, setInput] = useState("");
  let inputHandler = (e) => {
    e.preventDefault();

    setInputText(input.toUpperCase());
  };

  let handleChange = (e) => {
    var lowerCase = e.target.value;
    setInput(lowerCase);
  };

  return (
    <body>
      <div className="bread-crumbs">
        <a href="">Dashboard</a>
        {" > "}
        <a href="">Check GST Data</a>
      </div>
      <div className="gst-checker-cont">
        <div className="left">
          <>
            <h2>Search and Confirm GST Registration</h2>
            <p>Quickly Verify GST Numbers with Confidence</p>

            <form className="search" onSubmit={inputHandler}>

              <div class="searchBar" >
                <input id="searchQueryInput" type="text" name="searchQueryInput" onChange={handleChange} placeholder="Search" on value={input} />
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
                </button>
              </div>

            </form>
          </>
        </div>
        <div className="right">
          <img src="gst-svg.svg" alt="" />
        </div>
      </div>

      {inputText.trim() === "" ? (
        <div className="not-found"> <img src="No data-rafiki.png" alt="" />
        </div>
      ) : (
        <List input={inputText} />
      )}

    </body>
  );
}

export default App;
