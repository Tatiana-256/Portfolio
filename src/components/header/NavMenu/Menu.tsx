import React from 'react';
import styles from "./NavMenu.module.css";
import {Link} from "react-scroll";

const Menu = (props: any) => {
    return <div className={styles.n}>
        <ul className={styles.nav}>
            <Link activeClass="active" to="Main" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}>Main</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}>Skills</Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}>Projects</Link>
            <Link activeClass="active" to="Contacts" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}>Contacts</Link>
        </ul>
        <div className={styles.high} onClick={props.highNavMenu}>x</div>
    </div>
}

export default Menu