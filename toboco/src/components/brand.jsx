import React from "react";
import Footer from "./footer";
import styles from './brand.module.css';

function Brand(){
    return(
        <div>
            <div className={styles.brand}>brand</div>
            <Footer/>
        </div>
    )
}

export default Brand;