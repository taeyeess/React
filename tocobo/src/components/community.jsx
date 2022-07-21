import React from "react";
import Footer from "./footer";
import styles from './community.module.css'

function Community(){
    return(
        <div>
            <div className={styles.community}>Community</div>
            <Footer/>
        </div>
    )
}

export default Community;