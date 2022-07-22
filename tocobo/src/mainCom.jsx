import React from "react";
import styles from './mainCom.module.css';
import Footer from "./components/footer";


function MainCom(){
    return(
        <div>
          <div className={styles.main}></div>
          <div className={styles.contents}>
            <div className={styles.intro}>intro</div>
            <div className={styles.collection}>collection</div>
            <div className={styles.sns}>sns</div>
          </div>
          <Footer/>
        </div>
    )
}

export default MainCom;