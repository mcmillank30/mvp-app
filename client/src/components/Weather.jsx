import React from "react";

const Weather = ({ city, temperature, humidity, error, description, country }) => {

    return (

      <div>
        {city && country && <p>Location: {city}, {country}</p>}
        {temperature && <p>temperature: {temperature}</p>}
        {humidity && <p>Humidity: {humidity}</p>}
        {description && <p>Description: {description}</p>}
        {error && <p>{error}</p>}

      </div>
    )
  
}

export default Weather;