import React from "react";
import Forms from "./Forms.jsx";
import Titles from "./Titles.jsx";
import Weather from "./Weather.jsx";

const { API_KEY } = process.env;






class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
    this.getTheWeather = this.getTheWeather.bind(this);
  }
 

  getTheWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
  

    
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
     .then(api_call => {
       return api_call.json()
     })
     .then(data => {

       if(city && country) {
   
         console.log(data);
         this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        })
         
       } else {
        this.setState({
          error: 'Please enter city or state'
        })
       }
     })
    


  }

  
  render() {

    return (

      <div>
        <Titles />
        <Forms getTheWeather={this.getTheWeather}/>
        <Weather 
        {...this.state}
        />
      </div>
    )
  }
}

export default App;