import React from 'react';
import styles from './Projects.module.css';
import omni from '../../common/omni.png'
import shop from '../../common/shop.png'
import network from '../../common/network.png'
import Button from "../button/button";

function Projects() {
    return (
        <div id ='Projects' className={styles.projects}>
            <div className={styles.mainBox}>
                <div className={styles.blockTitle}><span>My projects</span></div>
                <div className={styles.line}/>
                <div className={styles.wrapper}>
                    <div className={styles.project}>
                        <img className={styles.image} src={shop} alt="Online-shop" className={styles.image}/>
                        <div className={styles.prj}>
                            <div>Online-shop</div>
                            <div className={styles.btn}>
                                <Button name={'Show'}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.image} src={omni} alt="OmniFood" className={styles.image}/>
                        <div className={styles.prj}>
                            <div>OmniFood</div>
                            <Button name={'Show'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
