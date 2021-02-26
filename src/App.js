import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "./Content-Card.js";
const nasaPicDataDefault = {
  url: "",
  date: "",
  title: "",
  media_type: "",
  explanation: "",
};

const url = "https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY"

function App() {
  const [nasaPicData, setNasaPicData] = useState(nasaPicDataDefault);
  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(`${url}`)

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
      <Content nasaPicData={nasaPicData} />
    </div>
  );
}

export default App;
//'https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=2012-03-14'  DO THIS TO CHANGE DATE STUFF
