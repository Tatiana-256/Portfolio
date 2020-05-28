import React from 'react';
import styles from './header.module.css';
import NavMenu from "./NavMenu/NavMenu";

function Header() {
    return (
        <div className={styles.header} id ='Main'>
            <div className={styles.container}>
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
