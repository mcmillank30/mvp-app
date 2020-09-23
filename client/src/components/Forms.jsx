import React from "react";



class Forms extends React.Component {

  render() {

    return (
      <div>
        <form onSubmit={this.props.getTheWeather}>
          <input type="text" name="city" placeholder= "Whats the city?"/>
          <input type="text" name="country" placeholder= "Whats the country?"/>
          <button>Click Me</button>
        </form>
      </div>
    )
  }
}

export default Forms;