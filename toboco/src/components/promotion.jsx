import React from "react";
import Footer from "./footer";
import styles from './promotion.module.css'

function Promotion(){
    return(
        <div>
            <div className={styles.promotion}>Promotion</div>
            <Footer/>
        </div>
    )
}

export default Promotion;