import React from 'react';
import styles from "./NavMenu.module.css";

const Menu = (props: any) => {
    return <div className={styles.n}>
        <div className={styles.nav}>
            <li className={styles.link}><a href='/'>Main</a></li>
            <li className={styles.link}><a href='/'>Skills</a></li>
            <li className={styles.link}><a href='/'>Projects</a></li>
            <li className={styles.link}><a href='/'>Contacts</a></li>
        </div>
        <div className={styles.high} onClick={props.highNavMenu}>x</div>
    </div>
}

export default Menu