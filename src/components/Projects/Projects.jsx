import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.mainBox}>
                <h1>My projects</h1>
                <div className={styles.project}>
                    <div>
                        <img src="" alt="socialNetwork" />
                        <div> Social network</div>
                    </div>
                    <div>
                        <img src="" alt="Online-shop" className={styles.image}/>
                        <div>Online-shop</div>
                    </div>
                    <div>
                        <img src="" alt="OmniFood" className={styles.image}/>
                        <div>OmniFood</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
