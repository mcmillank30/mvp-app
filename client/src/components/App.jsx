import React from "react";
import Forms from "./Forms.jsx";
import Titles from "./Titles.jsx";
import Weather from "./Weather.jsx";

 




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    // this.getTheWeather = this.getTheWeather.bind(this);
  }

  // getTheWeather = async () {
  //   const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
  //   const data = call.json()
  //   console.log(data)
  // }

  componentDidMount(e) {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {

    return (

      <div>
        <Titles />
        <Forms getTheWeather={this.componentDidMount}/>
        <Weather />
      </div>
    )
  }
}

export default App;