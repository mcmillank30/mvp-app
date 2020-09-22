import React from "react";
import Forms from "./Forms.jsx";
import Titles from "./Titles.jsx";
import Weather from "./Weather.jsx";






const App = () => {

  // getTheWeather = async() => {
  //   // const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
  //   // const data = await call.json()
  }

 
    return (

      <div>
        <Titles />
        <Forms />
        <Weather />
      </div>
    )
  
}

export default App;