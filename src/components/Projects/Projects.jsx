import React from 'react';
import styles from './Projects.module.css';
import omni from '../../common/omni.png'
import shop from '../../common/shop.png'
import network from '../../common/network.png'
import Button from "../button/button";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.mainBox}>
                <div className={styles.blockTitle}><span>My projects</span></div>
                <div className={styles.wrapper}>
                    <div className={styles.project}>
                        <img className={styles.image} src={network} alt="socialNetwork"/>
                        <div> Social network</div>
                        <Button name={'Show'}/>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.image} src={shop} alt="Online-shop" className={styles.image}/>
                        <div>Online-shop</div>
                        <Button name={'Show'}/>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.image} src={omni} alt="OmniFood" className={styles.image}/>
                        <div>OmniFood</div>
                        <Button name={'Show'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
