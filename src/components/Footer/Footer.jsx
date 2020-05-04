import React from 'react';
import styles from './Footer.module.css';
import git from '../../common/icons/github.svg'
import linkedin from '../../common/icons/linkedin.svg'
import facebook from '../../common/icons/facebook.svg'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.b}>
                <div className={styles.icons}>
                    <a href="https://www.facebook.com/tanya.beznosiuk/"><img src={facebook} alt="" className={styles.icon}/></a>
                    <a href='https://www.linkedin.com/in/tetiana-beznosiuk/'><img src={linkedin} alt="" className={styles.icon}/></a>
                    <a href='https://github.com/Tatiana-256'><img src={git} alt="GIT" className={styles.icon}/></a>
                </div>
                <div className={styles.allR}>
                    <div className={styles.a}>© 2020 All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
