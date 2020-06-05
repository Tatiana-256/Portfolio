import React from 'react';
import styles from './Contacts.module.css';
import Button from "../button/button";
import {Fade} from "react-reveal";

function Contacts() {
    return (
        <div className={styles.contacts} id ='Contacts'>
            <div className={styles.mainBox}><div  className={styles.cont}>Contact me</div>
                <Fade bottom>

                <form className={styles.formInput}>
                    <div className={styles.contact}>
                        <input className={styles.forHover} type="text" placeholder="Name"/>
                        <input className={styles.forHover}  type="email" placeholder="E-mail"/>
                        <textarea className={styles.forHover}  placeholder="Your message"></textarea>
                    </div>
                    <div className={styles.btn}><Button name={'Submit'}/></div>
                </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
