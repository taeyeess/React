import React from "react";
import styles from './mainCom.module.css';
import Footer from "./components/footer";


function MainCom(){
    return(
        <div>
          <div className={styles.contents}>
            <div className={styles.intro}></div>
            <div className={styles.collection}></div>
            <div className={styles.sns}></div>
          </div>
          <Footer/>
        </div>
    )
}

export default MainCom;