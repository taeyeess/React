import React from "react";
import ShopItems from './shopItems';
import Footer from "./footer";
import styles from './shop.module.css';


function Shop(){
    return(
        <div>
            <div className={styles.shop}>
              <h3 className={styles.h3}>Hello❤️ We are TOCOBO!</h3>
              <h2 className={styles.h2}>Follow Your Intuition</h2>
              <ul className={styles.nav}>
                <li>All Product</li>
                <li>Cleansing</li>
                <li>Toner</li>
                <li>Essence</li>
                <li>Cream</li>
                <li>Sun</li>
                <li>Set/Etc</li>
              </ul>
              <ShopItems/>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Shop;