
import React, { Component } from 'react';

export  function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  export  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  export  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
 export function BoilingVerdict(props) {
    if (props.celcius >= 100) {
      return <h2>The water would boil.</h2>;
    }
    return <h1>The water would not boil.</h1>;
  }
  