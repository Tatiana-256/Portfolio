import React from 'react';
import styles from './Footer.module.css';
import git from '../../common/icons/github.svg'
import linkedin from '../../common/icons/linkedin.svg'
import facebook from '../../common/icons/facebook.svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.b}>
                <div className={styles.icons}>
                    <img src={facebook} alt="" className={styles.icon}/>
                    <img src={linkedin} alt="" className={styles.icon}/>
                    <img src={git} alt="GIT" className={styles.icon}/>
                </div>
                <div className={styles.allR}>
                    <div className={styles.a}>© 2020 All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
