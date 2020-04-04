import React from 'react';
import styles from './Projects.module.css';
import omni  from '../../common/omni.png'
import shop  from '../../common/shop.png'
import network  from '../../common/network.png'

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.mainBox}>
                <span className={styles.blockTitle}>My projects</span>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <img className={styles.image} src={network} alt="socialNetwork" />
                        <div> Social network</div>
                        <button>Show</button>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.image} src={shop} alt="Online-shop" className={styles.image}/>
                        <div>Online-shop</div>
                        <button>Show</button>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.image} src={omni} alt="OmniFood" className={styles.image}/>
                        <div>OmniFood</div>
                        <button>Show</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
