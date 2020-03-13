import React from 'react';
import styles from './Projects.module.css';
import omni  from '../../common/omni.png'
import shop  from '../../common/shop.png'
import network  from '../../common/network.png'

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.mainBox}>
                <h1>My projects</h1>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <img src={network} alt="socialNetwork" />
                        <div> Social network</div>
                        <button>Show</button>
                    </div>
                    <div className={styles.project}>
                        <img src={shop} alt="Online-shop" className={styles.image}/>
                        <div>Online-shop</div>
                        <button>Show</button>
                    </div>
                    <div className={styles.project}>
                        <img src={omni} alt="OmniFood" className={styles.image}/>
                        <div>OmniFood</div>
                        <button>Show</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
