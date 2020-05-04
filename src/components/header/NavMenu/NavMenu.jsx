import React from 'react';
import styles from './NavMenu.module.css';
import {Link, NavLink} from "react-router-dom";

function NavMenu() {
    return (
        <div className={styles.nav}>
            <Link to='/Main' className={styles.link}>Main</Link>
            <Link to='/Skills' className={styles.link}>Skills</Link>
            <Link to='/Projects' className={styles.link}>Projects</Link>
            <Link to='/Contacts' className={styles.link}>Contacts</Link>
        </div>

    );
}

export default NavMenu;
