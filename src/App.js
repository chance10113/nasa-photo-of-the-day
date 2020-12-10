import React, { useState , useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Content from "./Content-Card.js"
//url, date, title, media_type, explanation
const nasaPicDataDefault = {
  url: '', date: '', title: '', media_type:'', explanation:''
}
function App() {
  //const baseUrl = 'https:api.nasa.gov/planetary/apod'
  //const [ date , setDate ] = useState('today')    //might not be a string
  //const api = 'DEMO_KEY'
  //const [ hd, setHd ] = useState(false)
  //(`${baseUrl}?/api_key=${api}`) 
  const [ nasaPicData, setNasaPicData] = useState(nasaPicDataDefault)
  useEffect(() => {
    //Add api stuff here
    const fetchImage = () => {
    axios.get('https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=2012-03-14')
    
    .then(res => {
      setNasaPicData(res.data)
      console.log('.then APP' , res.data)
    })
    .catch(beef => {
      console.log('Failure in App.js', beef)
    })}
    fetchImage()
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      < Content nasaPicData={nasaPicData} />
    </div>
  );
}

export default App;
//'https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=2012-03-14'  DO THIS TO CHANGE DATE STUFF