import React from 'react';
import styles from "./NavMenu.module.css";
import {Link, animateScroll as scroll} from "react-scroll";

const Menu = (props: any) => {
    return <div className={styles.n}>
        <ul className={styles.nav}>
            <Link activeClass="active" to="Main" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}><a href='#Main'>Main</a></Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}>
                <a href='#Skills'>Skills</a></Link>
            <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}><a href='#Projects'>Projects</a></Link>
            <Link activeClass="active" to="Contacts" spy={true} smooth={true} offset={-70} duration={500}
                  className={styles.link}><a href='#Contacts'>Contacts</a></Link>
        </ul>
        <div className={styles.high} onClick={props.highNavMenu}>x</div>
    </div>
}

export default Menu