import React from 'react';
import styles from "./NavMenu.module.css";

const Menu = (props: any) => {
    return <div className={styles.n}>
        <ul className={styles.nav}>
            <li className={styles.link}><a href='#Main'>Main</a></li>
            <li className={styles.link}><a href='#Skills'>Skills</a></li>
            <li className={styles.link}><a href='#Projects'>Projects</a></li>
            <li className={styles.link}><a href='#Contacts'>ContactsContainer</a></li>
        </ul>
        <div className={styles.high} onClick={props.highNavMenu}>x</div>
    </div>
}

export default Menu