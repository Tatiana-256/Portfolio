import React from 'react';
import styles from './Skills.module.css';
import html5 from '../../common/icons/html-5.svg'
import JS from '../../common/icons/javascript.svg'
import css from '../../common/icons/css3.svg'
import git from '../../common/icons/github.svg'
import react from '../../common/icons/react-native.svg'
import redux from '../../common/icons/redux.svg'

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <div className={styles.headerTitile}></div>
                <div className={styles.blockTitle}>My skills</div>
                <div className={styles.line}></div>

                <div className={styles.itemsWrapper}>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={JS} alt="JS"/></div>
                        <span className={styles.skillTitle}>Java script</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={html5} alt="HTML"/></div>
                        <span>HTML</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={css} alt="CSS"/></div>
                        <span>CSS</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={git} alt="GIT"/></div>
                        <span>GIT</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={react} alt="React"/></div>
                        <span>React</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={redux} alt="Redux"/></div>
                        <span>Redux</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
