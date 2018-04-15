
import React, { Component } from 'react';

import TemperatureInput  from "./TemperatureInput";
import { toCelcius, toFahrenheit, tryConvert, BoilingVerdict } from './tempFunction.js';



class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.handleCelciusChange = this.handleCelciusChange.bind(this);
      this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
      this.state= {temperature: '',scale: 'c'};
      
    }
    
    handleCelciusChange(temperature){
      this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature){
      this.setState({scale: 'f', temperature});
    }
    
    render(){
      
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      
      return(
        <div>
          <TemperatureInput 
            scale = "c"
            temperature={celcius}
            onTemperatureChange={this.handleCelciusChange} />
          <TemperatureInput 
            scale = "f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          
            <BoilingVerdict celcius={parseFloat(celcius)} />
        </div>
      );
    }
  }
  
  export default Calculator;