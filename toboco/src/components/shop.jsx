import React, { Component } from "react";
import ShopItemAll from './shopItemAll';
import Cleansing from './cleansing';

import Footer from "./footer";
import styles from './shop.module.css';



const menuList = {
  0: <ShopItemAll />,
  1: <Cleansing />,
  // 2: <Toner/>,
  // 3: <Essence/>,
  // 4: <Cream/>,
  // 5: <Sun/>,
  // 6: <Etc/>  
};

class Shop extends React.Component{
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){
    return(
      <div>
        <div className={styles.shop}>
          <h3 className={styles.h3}>Hello❤️ We are TOCOBO!</h3>
          <h2 className={styles.h2}>Follow Your Intuition</h2>
          <ul className={styles.nav}>
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>All Product</li>
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(1)}>Cleansing</li>
            <li>Toner</li>
            <li>Essence</li>
            <li>Cream</li>
            <li>Sun</li>
            <li>Set/Etc</li>
          </ul>
          <div className={styles.contentArea}>
            {menuList[this.state.menu]}
            {/* <ShopItemAll/> */}
          </div>
        </div>
        <Footer/>
      </div>
      
  )
  }
}

// function Shop(){
//     return(
//         <div>
//             <div className={styles.shop}>
//               <h3 className={styles.h3}>Hello❤️ We are TOCOBO!</h3>
//               <h2 className={styles.h2}>Follow Your Intuition</h2>
//               <ul className={styles.nav}>
//                 <li>All Product</li>
//                 <li>Cleansing</li>
//                 <li>Toner</li>
//                 <li>Essence</li>
//                 <li>Cream</li>
//                 <li>Sun</li>
//                 <li>Set/Etc</li>
//               </ul>
//               <ShopItems/>
//             </div>
//             <Footer/>
//         </div>
        
//     )
// }

export default Shop;