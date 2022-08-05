import React, { Component } from "react";
import styles from './mainCom.module.css';
import Footer from "./components/footer";
import SimpleSlider from "./simpleSlider";
import "./slick.css";
import "./slick-theme.css";


function MainCom(){
    return(
        <>
          <div className={styles.main}>
            <SimpleSlider/>            
          </div>
          <div className={styles.contents}>
            <div className={styles.intro}>intro</div>
            <div className={styles.collection}>collection</div>
            <div className={styles.sns}>sns</div>
          </div>
          <Footer/>
        </>
    )
}

export default MainCom;