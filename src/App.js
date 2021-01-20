import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Content from "./Content-card";

const nasaPicDataDefault = {
  url: "",
  date: "",
  title: "",
  media_type: "",
  explanation: "",
};
function App() {
  const [nasaPicData, setNasaPicData] = useState(nasaPicDataDefault);
  useEffect(() => {
    //Add api stuff here
    const fetchImage = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY")

        .then((res) => {
          setNasaPicData(res.data);
        })
        .catch((beef) => {
          console.log("Failure in App.js", beef);
        });
    };
    fetchImage();
  }, []);
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
      <Content nasaPicData={nasaPicData} />
    </div>
  );
}

export default App;

// //'https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=2012-03-14'
// This is a way to change the date manually
