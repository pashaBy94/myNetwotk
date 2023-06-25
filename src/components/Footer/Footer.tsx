import React from "react";
import styles from './Footer.module.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div className={styles.footer}>
                <p> @ Gonzo </p>
            </div>
        )
    }
}