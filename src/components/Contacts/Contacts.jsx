import React from 'react';
import styles from './Contacts.module.css';
import Button from "../button/button";

function Contacts() {
    return (
        <div className={styles.contacts} id ='Contacts'>
            <div className={styles.mainBox}><div  className={styles.cont}>Contact me</div>
                <form className={styles.formInput}>
                    <div className={styles.contact}>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="E-mail"/>
                        <textarea placeholder="Your message"></textarea>
                    </div>
                    <div className={styles.btn}><Button name={'Submit'}/></div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
