import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.mainBox}><h1>Contact me</h1>
                <form className={styles.formInput}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <textarea placeholder="Your message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
