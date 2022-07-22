import React, { Component } from "react";
import ShopItemAll_in from './shopItemAll_in';

class ShopItemAll extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <ShopItemAll_in/>
        )
    }
  }
  
  
  export default ShopItemAll;