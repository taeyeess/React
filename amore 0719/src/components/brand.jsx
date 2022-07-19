import React from "react";
import styles from './brand.module.css';
import BrandItems from './brandItem';
import Footer from "./footer";

function Brand(){
    return(
        <div>
            <div className={styles.mainimg}></div>
            <div className={styles.contents}>
              <div className={styles.contents_in}>
                <div className={styles.ttl}>
                  <h3>BEST BRAND</h3>
                </div>
                <BrandItems/>
              </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Brand;