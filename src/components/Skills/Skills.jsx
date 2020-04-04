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
            <div className={styles.head}>
                <span>My skills</span>
                    <div className={styles.itemsWrapper}>
                        <div className={styles.item}>
                            <img src={JS} alt="JS"/>
                            <span>Java script</span>
                        </div>
                        <div className={styles.item}>
                            <img src={html5} alt="HTML"/>
                            <span>HTML</span>
                        </div>
                        <div className={styles.item}>
                            <img src={css} alt="CSS"/>
                            <span>CSS</span>
                        </div>
                        <div className={styles.item}>
                            <img src={git} alt="GIT"/>
                            <span>GIT</span>
                        </div>
                        <div className={styles.item}>
                            <img src={react} alt="React"/>
                            <span>React</span>
                        </div>
                        <div className={styles.item}>
                            <img src={redux} alt="Redux"/>
                            <span>Redux</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Skills;
