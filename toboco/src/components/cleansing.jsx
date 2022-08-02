import React, { Component } from "react";
import Cleansing_in from './cleansing_in';

class Cleansing extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <Cleansing_in/>
        )
    }
  }
  
  
  export default Cleansing;